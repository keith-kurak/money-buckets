import { useState } from "react";
import { ListItem, Input, Button, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { LineItem } from "@/models";

export const EditableLineItemRow = observer(function EditableLineItem({
  onConfirm,
  onCancel,
}: {
  onConfirm: (lineItemFragment: {
    description: string;
    amount: number;
  }) => void;
  onCancel: () => void;
}) {
  const { theme } = useTheme();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <ListItem>
      <ListItem.Content>
        <Input
          autoFocus
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Input
          placeholder="Amount"
          value={amount.toString()}
          onChangeText={(val) => setAmount(parseFloat(val))}
        />
        <View style={{ flexDirection: "row" }}>
          <Button
            containerStyle={{ marginRight: theme.spacing.sm }}
            onPress={() => {
              onConfirm({ description, amount });
            }}
          >
            Confirm
          </Button>
          <Button onPress={onCancel}>Cancel</Button>
        </View>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
});

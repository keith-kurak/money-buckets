import { useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import { View, FlatList } from "react-native";
import { ListItem, FAB } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import { Ionicons } from "@expo/vector-icons";
import { useStores } from "@/models";
import { LineItemRow, EditableLineItemRow } from "@/components";

export default observer(function BucketScreen() {
  const { bucketId, budgetId } = useLocalSearchParams();
  const { budgetsStore } = useStores();
  const [isEditing, setIsEditing] = useState(false);

  const bucket = budgetsStore.budgets
    .find((budget) => budget.name === budgetId)
    ?.buckets.find((bucket) => bucket.name === bucketId);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => <LineItemRow lineItem={item} />;

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: `Bucket with id ${bucketId}` }} />
      <FlatList
        data={bucket?.lineItems.slice()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={
          isEditing && (
            <EditableLineItemRow
              onCancel={() => setIsEditing(false)}
              onConfirm={({ description, amount }) => {
                setIsEditing(false);
                budgetsStore.addLineItem({
                  bucketName: bucketId,
                  budgetName: budgetId,
                  description,
                  amount,
                });
              }}
            />
          )
        }
      />
      {!isEditing && (
        <FAB
          placement="right"
          onPress={() => {
            setIsEditing(true);
          }}
        >
          <Ionicons name="add" size={30} color="white" />
        </FAB>
      )}
    </View>
  );
});

const LineItemList = observer(function LineItemList({ lineItems }) {
  const renderItem = ({ item }) => (
    <ListItem
      onPress={() => {
        console.log("press");
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{item.description}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
});

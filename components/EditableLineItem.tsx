import { ListItem } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import { LineItem } from "@/models";

export default observer(function EditableLineItem({ editingLineItem } : { editingLineItem: LineItem }) {
  return <ListItem
      onPress={() => {
        console.log("press");
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{editingLineItem.description}</ListItem.Title>
        <ListItem.Subtitle>{editingLineItem.amount}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
});

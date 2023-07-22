import { ListItem } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import { LineItem } from "@/models";

export default observer(function LineItem({ lineItem } : { lineItem: LineItem }) {
  return <ListItem
      onPress={() => {
        console.log("press");
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{lineItem.description}</ListItem.Title>
        <ListItem.Subtitle>{lineItem.amount}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
});

import { useLocalSearchParams, Stack } from "expo-router";
import { View, FlatList } from "react-native";
import { ListItem, FAB } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import { useStores } from "@/models";

export default observer(function BucketScreen() {
  const { bucketId, budgetId } = useLocalSearchParams();
  const { budgetsStore } = useStores();

  const bucket = budgetsStore.budgets
    .find((budget) => budget.name === budgetId)
    ?.buckets.find((bucket) => bucket.name === bucketId);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: `Bucket with id ${bucketId}` }} />
      <LineItemList lineItems={bucket?.lineItems.slice()} />
      <FAB
        placement="right"
        onPress={() =>
          budgetsStore.addLineItem({
            bucketName: bucketId,
            budgetName: budgetId,
            description: "llama",
            amount: 5,
          })
        }
      />
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

  const keyExtractor = (item, index) => index.toString();

  return (
    <FlatList
      data={lineItems}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
});

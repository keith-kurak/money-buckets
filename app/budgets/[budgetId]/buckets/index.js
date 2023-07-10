import { router, useLocalSearchParams } from "expo-router";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";

const mockData = [
  {
    id: 1,
    name: "Ben",
  },
  {
    id: 2,
    name: "Ephraim",
  },
  {
    id: 3,
    name: "Helena",
  },
];

export default function Index() {
  const { budgetId } = useLocalSearchParams();

  const renderItem = ({ item }) => (
    <ListItem
      onPress={() => {
        router.push({
          pathname: `/budgets/[budgetId]/buckets/[bucketId]`,
          params: { bucketId: item.id, budgetId: budgetId },
        });
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

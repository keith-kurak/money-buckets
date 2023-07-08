import { router } from "expo-router";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";

const mockData = [
  {
    id: 1,
    name: "Kids Bank",
  },
  {
    id: 2,
    name: "Main Budget",
  },
];

export default function Index() {
  const renderItem = ({ item }) => (
    <ListItem onPress={() => { router.push({ pathname:`/buckets/[id]`, params: { id: item.id }})}}>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const keyExtractor = item => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={mockData} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
}

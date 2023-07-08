import { useLocalSearchParams, Stack } from "expo-router";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";

const mockData = [
  {
    id: 1,
    description: "Food",
    amount: 7.50
  },
  {
    id: 2,
    description: "Gas",
    amount: 35.00
  },
];

export default function BucketScreen() {

  const { id } = useLocalSearchParams();

  const renderItem = ({ item }) => (
    <ListItem onPress={() => { console.log('press')}}>
      <ListItem.Content>
        <ListItem.Title>{item.description}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const keyExtractor = item => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: `Bucket with id ${id}` }} />
      <FlatList data={mockData} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
}

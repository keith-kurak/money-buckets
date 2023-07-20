import { router, useLocalSearchParams } from "expo-router";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";
import { observer } from "mobx-react-lite"
import { useStores } from "@/models"

export default observer(function Index() {
  const { budgetId } = useLocalSearchParams();
  const { budgetsStore } = useStores();

  const renderItem = ({ item }) => (
    <ListItem
      onPress={() => {
        router.push({
          pathname: `/budgets/[budgetId]/buckets/[bucketId]`,
          params: { bucketId: item.name, budgetId: budgetId },
        });
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const keyExtractor = (item) => item.name.toString();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={budgetsStore.budgets[0].buckets}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
})

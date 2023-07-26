import { router, useLocalSearchParams, Stack } from "expo-router";
import { View, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";
import { observer } from "mobx-react-lite"
import { useStores } from "@/models"

export default observer(function Index() {
  const { budgetName } = useLocalSearchParams();
  const { budgetsStore } = useStores();

  const renderItem = ({ item }) => (
    <ListItem
      onPress={() => {
        router.push({
          pathname: `/budgets/[budgetName]/buckets/[bucketName]`,
          params: { bucketName: item.name, budgetName: budgetName },
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
      <Stack.Screen options={{ title: `${budgetName} budget` }} />
      <FlatList
        data={budgetsStore.budgets[0].buckets}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
})

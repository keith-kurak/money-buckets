import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ justifyContent: 'center'}}>
      <Text>hello buckets</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

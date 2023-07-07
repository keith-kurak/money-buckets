import { StatusBar } from "expo-status-bar";
import { View } from 'react-native'
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

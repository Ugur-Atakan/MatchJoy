import { ActivityIndicator, Text, View } from "react-native";

export default function LoadingComponent() {
  return (
    <View>
      <ActivityIndicator size="large" color={'#ccc'} />
      <Text>Loading...</Text>
    </View>
  )
}
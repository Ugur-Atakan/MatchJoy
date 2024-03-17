import { SafeAreaView, Text, View } from "react-native";
import Matches from "@components/Matches";

export default function MatchScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff] justify-center items-center">
      <Text>Login Screen</Text>
      <Matches />
    </SafeAreaView >
  )
}
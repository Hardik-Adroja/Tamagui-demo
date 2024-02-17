import { Button, Text, View } from "tamagui";

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="center">
      <Text fontSize={20}>Tab One</Text>
      <Button
        size={"$5"}
        mt="$4"
        onPress={() => {
          console.log("press only once and press sound also only once");
        }}
      >
        Normal Tamagui Button
      </Button>
    </View>
  );
}

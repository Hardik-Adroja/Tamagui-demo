import { Text, View } from "tamagui";
import CustomButton from "../../component/CustomButton";

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center">
      <Text fontSize={20}>Tab Two</Text>

      <CustomButton
        size={"$5"}
        mt="$4"
        onPress={() => {
          console.log("press only once but press sound two times");
        }}
      >
        Custom Tamagui Button
      </CustomButton>
    </View>
  );
}

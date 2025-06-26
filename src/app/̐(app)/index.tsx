import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.get);

  return (
    <View className="flex-1 bg-dark pt-40">
      {tasks?.map(({ _id, text }) => (
        <Text className="text-white" key={_id}>
          {text}
        </Text>
      ))}
    </View>
  );
}

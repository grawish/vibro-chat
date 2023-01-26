import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import useGlobalData from "../../shared/hooks/UseGlobalData";

const Home = () => {
  const globalData = useGlobalData();

  useEffect(() => {
    console.log("globalData", globalData);
  }, [globalData]);

  return (
    <View className={"h-full flex justify-center items-center"}>
      <Text>{JSON.stringify(globalData)}</Text>
      <Button
        title={"Increment"}
        onPress={() => {
          globalData.increment();
        }}
      />
      <Button
        title={"Decrement"}
        onPress={() => {
          globalData.decrement();
        }}
      />
    </View>
  );
};

export default Home;

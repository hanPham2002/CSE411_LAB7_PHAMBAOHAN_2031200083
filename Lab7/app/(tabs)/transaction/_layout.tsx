import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

const TransactionLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Transaction",
          headerShown: true,
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#D4A73E",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: "Transaction Detail",
          headerShown: true,
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#D4A73E",
          },
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                paddingTop: 10,
                marginLeft: 40,
              }}
            >
              <Icon size={30} color={"white"} source="dots-vertical" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="add-transaction"
        options={{
          title: "Add Transaction",
          headerShown: true,
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#D4A73E",
          },
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                paddingTop: 10,
                marginLeft: 40,
              }}
            >
              <Icon size={30} color={"white"} source="dots-vertical" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default TransactionLayout;

const styles = StyleSheet.create({});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "../screens/ProfileScreen";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { PostsScreen } from "../screens/PostsScreen";
import { UserIcon, PlusIcon, GridIcon } from "./icons/Icons";
import { StyleSheet, View } from "react-native";
import { HeaderLogoutButton } from "./HeaderLogoutButton";
import { BackButton } from "./BackButton";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();
const TabNavigation = () => {


  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            return (
              <View
                style={focused ? styles.focusedIconWrapper : styles.iconWrapper}
              >
                <GridIcon stroke={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "CreatePosts") {
            return (
              <View
                style={focused ? styles.focusedIconWrapper : styles.iconWrapper}
              >
                <PlusIcon fill={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "Profile") {
            return (
              <View
                style={focused ? styles.focusedIconWrapper : styles.iconWrapper}
              >
                <UserIcon stroke={focused ? "white" : "black"} />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingLeft: 82,
          paddingRight: 82,
          justifyContent: "center",
          alignItems: "center",
        },
        headerShown: true,
        headerStyle: {
          borderBottomWidth: 1,
        },
      })}
    >
      <Tab.Screen
        name={"Posts"}
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <HeaderLogoutButton />,
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <Tab.Screen
        name={"CreatePosts"}
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerLeft: () => <BackButton />,
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedIconWrapper: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

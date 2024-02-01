import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../Home";
import { RootStackParamList, editLocationType } from "../../Types/Types";
import Profile from "../../Profile";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Results } from "../../Results";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigation = () => {
  const location = useSelector<RootState, editLocationType>(
    (state) => state.location
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="gray" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="gray" />,
        }}
      />
      <Tab.Screen
        name="Result"
        component={Results}
        options={{
          tabBarBadge: location.city,
          tabBarIcon: () => (
            <FontAwesome6 name="map-location" size={24} color="gray" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

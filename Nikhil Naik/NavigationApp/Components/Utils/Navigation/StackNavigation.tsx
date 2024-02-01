import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../Home";
import { RootStackParamList } from "../../Types/Types";
import { TabNavigation } from "./TabNavigation";
import { DrawerNavigation } from "./DrawerNavigation";
import { EditProfile } from "../../EditProfile";
import { Cities } from "../../Cities";
import { CityDescription } from "../../CityDescription";
import { Places } from "../../Places";
import { Location } from "../Location/Location";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerRight: () => <Location /> }}>
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CityDescription" component={CityDescription} />
        <Stack.Screen name="Cities" component={Cities} />
        <Stack.Screen name="Places" component={Places} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

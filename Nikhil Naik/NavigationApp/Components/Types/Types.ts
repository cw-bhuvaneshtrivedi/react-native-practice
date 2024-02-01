import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type locationReducerType = {
  type: string;
  payload: {
    city: string;
    state: string;
  };
};

export type CityType = {
  city: string;
  state: string;
  description: string;
  places: string[];
};

export type editLocationType = {
  city: string;
  state: string;
};

export type RootStackParamList = {
  Home: undefined;
  CityDescription: {
    city: string | undefined;
    state: string | undefined;
    description: string | undefined;
    places: string[];
  };
  Places: { places: string[] };
  Profile: undefined;
  EditProfile: undefined;
  Cities: undefined;
  Settings: undefined;
  Description: undefined;
  Result: undefined;
  Feed: { sort: "latest" | "top" } | undefined;
};

// type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Home">;

// type CityDescriptionScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "CityDescription"
// >;

// export type Props = {
//   route: ProfileScreenRouteProp;
//   navigation: ProfileScreenNavigationProp;
// };

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type SettingsProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;
export type EditProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "EditProfile"
>;
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;
export type CityDescriptionProps = NativeStackScreenProps<
  RootStackParamList,
  "CityDescription"
>;
export type CityProps = NativeStackScreenProps<RootStackParamList, "Cities">;
export type PlacesProps = NativeStackScreenProps<RootStackParamList, "Places">;

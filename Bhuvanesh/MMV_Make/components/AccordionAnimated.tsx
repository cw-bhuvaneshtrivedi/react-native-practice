import { useEffect } from "react";
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text, StyleSheet, View } from "react-native";

type AccordionProps = {
  name: string;
};

type AccordionAnimatedProps = {
  name: string;
  open: boolean;
};

const Card = ({ name }: AccordionProps) => {
  const accordion = StyleSheet.create({
    text: { fontSize: 15 },
    container: { height: 50 },
  });
  return (
    <View style={accordion.container}>
      <Text style={accordion.text}>{name}</Text>
    </View>
  );
};

const AccordionAnimated = ({ name, open }: AccordionAnimatedProps) => {
  const height = useSharedValue(0);

  useEffect(() => {
    if (open) height.value = withTiming(150);
    else height.value = withTiming(0);
  }, [open]);

  const aniStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const style = StyleSheet.create({
    view: { justifyContent: "center", paddingLeft: 20, overflow: "hidden" },
  });
  return (
    <Animated.View style={[style.view, aniStyle]}>
      <Card name="Hyundai" />
      <Card name="Hyundai" />
      <Card name="Hyundai" />
    </Animated.View>
  );
};

export default AccordionAnimated;

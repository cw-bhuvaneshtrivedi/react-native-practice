import { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Text,
  StyleSheet,
  View,
  LayoutChangeEvent,
  ScrollView,
  Dimensions,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

type AccordionAnimatedProps = {
  open: boolean;
  data: string[];
};

const Card = ({ name }: { name: string }) => {
  const accordion = StyleSheet.create({
    text: { fontSize: 15 },
    container: {
      backgroundColor: "#f9f9f9",
      height: 50,
      justifyContent: "center",
      paddingLeft: 36,
    },
  });
  return (
    <View style={accordion.container}>
      <Text style={accordion.text}>{name}</Text>
    </View>
  );
};

const AccordionAnimated = ({ open, data }: AccordionAnimatedProps) => {
  const height = useSharedValue(0);
  const [tmpHeight, setTmpHeight] = useState(0);

  const SCREEN_WIDTH = Dimensions.get("screen").width;
  useEffect(() => {
    if (open) height.value = withTiming(tmpHeight);
    else height.value = withTiming(0);
  }, [open]);

  const aniStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const style = StyleSheet.create({
    view: {
      justifyContent: "center",
      paddingLeft: 20,
      overflow: "hidden",
    },
  });
  return (
    <Animated.View style={[style.view, aniStyle]} testID="AnimatedH">
      <View
        style={{ position: "absolute", width: SCREEN_WIDTH }}
        onLayout={(e: LayoutChangeEvent) => {
          setTmpHeight(e.nativeEvent.layout.height);
        }}
      >
        <FlashList
          data={data}
          estimatedItemSize={54}
          renderItem={({ item }) => <Card name={item} />}
        />
      </View>
    </Animated.View>
  );
};

export default AccordionAnimated;

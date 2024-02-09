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
} from "react-native";
import { FlatList } from "react-native";

type AccordionAnimatedProps = {
  name: string;
  open: boolean;
  data: string[];
};

const Card = ({ name }: { name: string }) => {
  const accordion = StyleSheet.create({
    text: { fontSize: 15 },
  });
  return (
    <View>
      <Text style={accordion.text}>{name}</Text>
    </View>
  );
};

const AccordionAnimated = ({ name, open, data }: AccordionAnimatedProps) => {
  const height = useSharedValue(0);
  const [tmpHeight, setTmpHeight] = useState(0);

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
      <ScrollView
        style={{ position: "absolute" }}
        onLayout={(e: LayoutChangeEvent) => {
          setTmpHeight(e.nativeEvent.layout.height);
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <Card name={`${item}`} />}
        />
      </ScrollView>
    </Animated.View>
  );
};

export default AccordionAnimated;

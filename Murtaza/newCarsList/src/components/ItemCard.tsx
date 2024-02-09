import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export const ItemCard = ({ variations, select }: any) => {
  const [shortlist, setShortlist] = useState(false);
  const [compare, setCompare] = useState(false);
  const handleComparePress = () => {
    setCompare(!compare);
    select((count: number) => {
      return !compare ? count + 1 : count - 1;
    });
    //console.log("testing check")
  };
  const handleBookmark = () => {
    setShortlist(!shortlist);
    select((count: number) => {
      return !shortlist ? count + 1 : count - 1;
    });
  }
  return (
    <View style={style.container}>
      <View style={style.variationInfo}>
        <Text style={style.variationName} testID="carName">
          {variations.name}
        </Text>
        <View style={style.carDescriptionContainer}>
          <Text style={style.carDescriptionContainerText}>
            {variations.maxPower}
          </Text>
          <Text style={style.carDescriptionContainerText}>
            {variations.displacement}
          </Text>
          <Text style={style.carDescriptionContainerText}>
            {variations.transmission}
          </Text>
          <Text style={style.carDescriptionContainerText}>
            {variations.fuelType}
          </Text>
        </View>

        <View style={style.carPriceContainerMain}>
          <Text style={style.carPriceMainText}>
            {variations.priceOverview.price}
          </Text>
          <Text style={style.carPriceSecondaryText}>Show price in my city</Text>
          <Text style={style.carPriceEMIText}>EMI</Text>
        </View>
        <View style={style.carPriceContainerSecondary}>
          <Text style={style.carShowRoomPriceText}>Avg.Ex-Showroom Price</Text>
          <Text style={{ fontStyle: "italic" }}>{variations.emi}</Text>
        </View>
      </View>

      <View style={style.containerOptions}>
        <TouchableOpacity
          onPress={handleBookmark}
          style={{ justifyContent: "center" }}
          testID="shortlistOptionButton"
        >
          <View
            style={style.containerOptionsElementLeft}
            testID="shortlistOption"
          >
            {shortlist ? (
              <FontAwesome name="bookmark" size={15} color="#00afa0" />
            ) : (
              <FontAwesome name="bookmark-o" size={15} color="#6f6f6f" />
            )}
            {shortlist ? (
              <Text style={style.containerOptionsText}>Shortlisted</Text>
            ) : (
              <Text style={style.containerOptionsText}>Shortlist</Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={style.containerOptionsElementCenter}></View>
        <TouchableOpacity
          onPress={handleComparePress}
          style={{ justifyContent: "center" }}
          testID="compareOptionButton"
        >
          <View
            style={style.containerOptionsElementRight}
            testID="compareOption"
          >
            <FontAwesome
              name="balance-scale"
              size={13}
              color={compare ? "#00afa0" : "#6f6f6f"}
            />
            {compare ? (
              <Text style={style.containerOptionsText}>
                Remove from Compare
              </Text>
            ) : (
              <Text style={style.containerOptionsText}>Add to Compare</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginRight: 14,
    width: 321,
    height: 170,
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#e1e1e1",
    justifyContent: "space-between",
  },
  variationInfo: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  variationName: {
    paddingTop: 12,
    fontSize: 16,
    color: "#0288d1",
  },
  carShowRoomPriceText: {
    fontSize: 12,
    color: "#aaaaaa",
    alignSelf: "flex-end",
  },
  carEMIPrice: {
    color: "#484848",
    fontSize: 13,
  },
  carPriceMainText: {
    fontSize: 16,
    color: "#484848",
    fontWeight: "bold",
  },
  carPriceSecondaryText: {
    fontSize: 13,
    color: "#0288d1",
    alignSelf: "flex-end",
  },
  carPriceEMIText: {
    fontSize: 13,
    color: "#aaaaaa",
    alignSelf: "flex-end",
    fontStyle: "italic",
  },
  carPriceContainerMain: {
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carPriceContainerSecondary: {
    paddingTop: 4,
    flexDirection: "row",
    height: 20,
    justifyContent: "space-between",
  },
  carDescriptionContainer: {
    width: 233,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  carDescriptionContainerText: {
    color: "#aaaaaa",
    fontSize: 13,
  },
  containerOptions: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
    justifyContent: "space-between",
  },
  containerOptionsElementLeft: {
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerOptionsElementRight: {
    width: 200,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  containerOptionsElementCenter: {
    alignSelf: "center",
    height: 20,
    width: 1,
    backgroundColor: "#e1e1e1",
  },
  containerOptionsText: {
    paddingLeft: 4,
    color: "#6f6f6f",
  },
});

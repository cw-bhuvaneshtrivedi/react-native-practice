import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  card: {
    width: 360,
    height: 300,
    paddingTop: 12,
    backgroundColor: "white",
    paddingLeft: 4,
  },
  listCard: {
    width: 321,
    height: 170,
    margin: 7,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 3,
    justifyContent: "space-between",
  },
  textList: {
    padding: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
  },
  topRow: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 73,
  },
  flexRow: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  buttonAlign: {
    height: 40,
  },
  mkName: {
    // fontFamily: "@font/lato",
    fontSize: 13,
    color: "#aaaaaa",
  },
  mdName: {
    // fontFamily: "@font/lato",
    fontWeight: "600",
    fontSize: 18,
    color: "#484848",
  },
  buttonText: {
    fontSize: 13,
    color: "#6f6f6f",
    // fontFamily: "@font/lato",
    textAlign: "center",
  },
  buttonBackground: {
    backgroundColor: "#f9f9f9",
    height: 40,
    alignItems: "center",
  },
  specs: {
    fontSize: 13,
    color: "#aaaaaa",
    fontWeight: "600",
    // fontFamily: "@font/lato",
  },
  eMI: {
    fontSize: 13,
    color: "#aaaaaa",
    fontStyle: "italic",
    // fontFamily: "@font/lato",
  },
  versionName: {
    fontSize: 16,
    color: "#0288d1",
    // fontFamily: "@font/lato",
  },
  price: {
    color: "#484848",
    // fontFamily: "@font/lato",
    fontWeight: "bold",
    fontSize: 16,
  },
  offers: {
    color: "#0288d1",
    fontSize: 13,
  },
  overviewLabel: {
    fontSize: 12,
    color: "#aaaaaa",
  },
  body: {
    backgroundColor: "grey",
    flex: 1,
    paddingTop: 25,
  },
});
export default globalStyles;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
    flexDirection: "row",
    marginVertical: 12,
    elevation: 4,
  },

  left: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  right: {
    width: "55%",
    justifyContent: "center",
    padding: 10,
  },

  exerciseImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },

  name: {
    color: "#f3eff5",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  reviews: {
    color: "#72b01d",
    fontSize: 16,
  },

  distance: {
    color: "#f3eff5",
    fontSize: 15,
    marginTop: 5,
  },
});

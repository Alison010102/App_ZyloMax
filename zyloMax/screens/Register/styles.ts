import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#454955",
    flex: 1,
  },
  title: {
    color: "#454955",
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#72b01d",
    height: 100,
    position: "absolute",
    top: 0,
  },
  svg: {
    height: 200,
    marginTop: 40,
  },
  formButton: {
    marginTop: 50,
    width: "70%",
  },
  button: {
    backgroundColor: "#72b01d",
    padding: 3,
    opacity: 1,
    alignItems: "center",
    borderRadius: 50,
  },
  textButton: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: "#454955",
  },
  form: {
    alignItems: "center",
    justifyContent:"center",
    marginTop: 50,
    width: "80%"
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    width: "60%"
  },

  input: {
    width: "90%",
    backgroundColor: "transparent",
    fontWeight: 100,
    height: 40,
    borderRadius: 50,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#72b01d",
    marginBottom: 50,
    color: "#f3eff5"
  },
  arrowAnimation: {
    width: 90,
    height: 90
  },
  
});

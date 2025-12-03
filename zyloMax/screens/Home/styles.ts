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
  button2: {
    marginTop: 180,
    paddingHorizontal: 15,
    flexDirection: "row",
    maxHeight: 40
  },
  selectButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  textButton: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: "#454955",
  },
  form: {
    alignItems: "center",
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
  categoryButton: {
    color: "#f3eff5",
    fontSize: 16
  },
  cardScroll: {
    marginTop: 20,
    width: "100%"
  },
  cardContent: {
    alignItems: "center",
    paddingBottom: 100
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f3eff5",
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  actionCard: {
    width: "90%",
    backgroundColor: "#72b01d",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#0d0a0b",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 10,
  },
  actionCardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  actionCardIcon: {
    fontSize: 30,
    color: "#fff",
  },
  weeklyCard: {
    width: "90%",
    backgroundColor: "#f3eff5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#0d0a0b",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  weeklyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  dayCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#454955",
    justifyContent: "center",
    alignItems: "center",
  },
  dayCircleActive: {
    backgroundColor: "#72b01d",
    borderWidth: 2,
    borderColor: "#3f7d20",
  },
  dayText: {
    color: "#f3eff5",
    fontWeight: "bold",
    fontSize: 12,
  },
  weeklyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d0a0b",
  },
  weeklySubtitle: {
    fontSize: 14,
    color: "#454955",
    marginTop: 5,
  }
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
    flexDirection: "row",
    marginVertical: 12,
    elevation: 4,
  },

  /* 50% da largura, fundo preto */
  left: {
    width: "50%",
    backgroundColor: "#000",
    padding: 15,
    justifyContent: "center",
  },

  /* 50% da largura, imagem à direita */
  right: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  /* Imagem ocupando 70% da altura */
  exerciseImage: {
    width: "100%",
    height: "70%",
    borderRadius: 10,
    resizeMode: "cover",
  },

  score: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 18,
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },

  reviews: {
    color: "#ccc",
    marginTop: 3,
  },

  distance: {
    color: "#bbb",
    marginTop: 6,
  },

  status: {
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 16,
  },
});

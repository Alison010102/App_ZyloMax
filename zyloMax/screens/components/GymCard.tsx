import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

type GymCardProps = {
  name: string;
  score: number;
  reviewCount: number;
  distance: string;
  openStatus: string;
  image: any; 
  onPress?: () => void;
};

export default function GymCard({
  name,
  score,
  reviewCount,
  distance,
  openStatus,
  image,
  onPress,
}: GymCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>

        {/* ESQUERDA - informações */}
        <View style={styles.left}>
          <Text style={styles.score}>{score} pts</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.reviews}>({reviewCount} avaliações)</Text>
          <Text style={styles.distance}>Distância: {distance}</Text>

          <Text
            style={[
              styles.status,
              { color: openStatus === "Aberto" ? "#4caf50" : "#f44336" },
            ]}
          >
            {openStatus}
          </Text>
        </View>

        {/* DIREITA - IMAGEM */}
        <View style={styles.right}>
          <Image source={image} style={styles.exerciseImage} />
        </View>

      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

type GymCardProps = {
  title: string;
  minutes: string;
  exercises: string;
  image: any;
  onPress?: () => void;
};

export default function GymCard({
  title,
  minutes,
  exercises,
  image,
  onPress,
}: GymCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>

        <View style={styles.left}>
          <Image source={image} style={styles.exerciseImage} />
        </View>
        <View style={styles.right}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.reviews}>{minutes}</Text>
          <Text style={styles.distance}>{exercises}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { styles } from "./styles";
import GymCard from "../components/GymCard";

export default function Home() {
  const categories = [
    "Abdômen",
    "Braço",
    "Peito",
    "Pernas",
    "Costas e Ombros",
  ];

  const levels = [
    { level: "Iniciante", minutes: "12–18 minutos", exercises: "5–7 exercícios" },
    { level: "Intermediario", minutes: "20–25 minutos", exercises: "8–10 exercícios" },
    { level: "Avancado", minutes: "30–40 minutos", exercises: "12–15 exercícios" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const images: { [key: string]: { [key: string]: any } } = {
    Abdômen: {
      Iniciante: require("../images/abdomen1.jpg"),
      Intermediario: require("../images/abdomen2.jpg"),
      Avancado: require("../images/abdomen3.jpg"),
    },
    Braço: {
      Iniciante: require("../images/braco1.jpg"),
      Intermediario: require("../images/braco2.jpg"),
      Avancado: require("../images/braco3.jpg"),
    },
    Peito: {
      Iniciante: require("../images/peito1.jpg"),
      Intermediario: require("../images/peito2.jpg"),
      Avancado: require("../images/peito3.jpg"),
    },
    Pernas: {
      Iniciante: require("../images/perna1.jpg"),
      Intermediario: require("../images/perna2.jpg"),
      Avancado: require("../images/perna3.jpg"),
    },
    "Costas e Ombros": {
      Iniciante: require("../images/costa1.jpg"),
      Intermediario: require("../images/costa2.jpg"),
      Avancado: require("../images/costa3.jpg"),
    },
  };

  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <Svg
          width={Dimensions.get("screen").width}
          viewBox="0 0 1400 320"
          style={styles.svg}
        >
          <Path
            fill={"#72b01d"}
            d="M0,256L26.7,245.3C53.3,235,107,213,160,218.7C213.3,224,267,256,320,266.7C373.3,277,427,267,480,250.7C533.3,235,587,213,640,213.3C693.3,213,747,235,800,245.3C853.3,256,907,256,960,245.3C1013.3,235,1067,213,1120,197.3C1173.3,181,1227,171,1280,176C1333.3,181,1387,203,1413,213.3L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          />
          <Image
            style={styles.image}
            source={require("../images/logo.png")}
          />
        </Svg>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.button2}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.selectButton, { backgroundColor: selectedCategory === cat ? "#72b01d" : "#454955", }]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={styles.categoryButton}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.cardScroll}
        contentContainerStyle={styles.cardContent}
      >
        {selectedCategory &&
          levels.map((l) => (
            <GymCard
              key={l.level}
              title={`${selectedCategory} - ${l.level}`}
              minutes={l.minutes}
              exercises={l.exercises}
              image={images[selectedCategory][l.level]} />
          ))}

        <Text style={styles.sectionTitle}>Personalizar Treino</Text>
        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <Text style={styles.actionCardText}>Criar meu próprio treino</Text>
          <Text style={styles.actionCardIcon}>➜</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Metas Semanais</Text>
        <View style={styles.weeklyCard}>
          <View>
            <Text style={styles.weeklyTitle}>Frequência da Semana</Text>
            <Text style={styles.weeklySubtitle}>3 de 5 dias concluídos</Text>
          </View>
          <View style={styles.weeklyRow}>
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
              <View key={index} style={[styles.dayCircle, index < 3 && styles.dayCircleActive]}>
                <Text style={styles.dayText}>{day}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

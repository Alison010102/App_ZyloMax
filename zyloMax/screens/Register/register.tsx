import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
  PanResponder,
} from "react-native";
import { styles } from "./styles";
import Svg, { Path } from "react-native-svg";
import LottieView from "lottie-react-native";
import { Picker } from '@react-native-picker/picker';

const CustomSlider = ({ value, onValueChange, minimumValue, maximumValue, step = 1 }: any) => {
  const [width, setWidth] = useState(0);
  const widthRef = useRef(0);
  const valueRef = useRef(value);
  const startValue = useRef(0);

  valueRef.current = value;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        startValue.current = valueRef.current;
      },
      onPanResponderMove: (_, gestureState) => {
        const sliderWidth = widthRef.current;
        if (sliderWidth === 0) return;

        const diff = (gestureState.dx / sliderWidth) * (maximumValue - minimumValue);
        const rawValue = startValue.current + diff;

        const steppedValue = Math.round(rawValue / step) * step;

        const clampedValue = Math.max(minimumValue, Math.min(maximumValue, steppedValue));

        onValueChange(clampedValue);
      },
    })
  ).current;

  const percentage = width > 0
    ? ((value - minimumValue) / (maximumValue - minimumValue)) * 100
    : 0;

  return (
    <View
      style={styles.slider}
      onLayout={(e) => {
        const w = e.nativeEvent.layout.width;
        setWidth(w);
        widthRef.current = w;
      }}
      {...panResponder.panHandlers}
    >
      <View style={[styles.sliderTrack, { backgroundColor: "#3f7d20" }]} />
      <View style={[styles.sliderTrackFilled, { width: `${percentage}%`, backgroundColor: "#72b01d" }]} />
      <View style={[styles.sliderThumb, { left: `${percentage}%` }]} />
    </View>
  );
};

export default function Register({ navigation }: { navigation: any }) {
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [birthDay, setBirthDay] = useState<number | null>(null);
  const [birthMonth, setBirthMonth] = useState<number | null>(null);
  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [weight, setWeight] = useState<number>(70);
  const [targetWeight, setTargetWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(170);
  const [step, setStep] = useState(1);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const animateTransition = (callback: () => void) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -30,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      callback();
      slideAnim.setValue(30);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 350,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 350,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const nextStep = () => {
    animateTransition(() => {
      if (step < 14) {
        setStep(step + 1);
      } else {
        navigation.navigate("Home");
      }
    });
  };

  const calculateAge = () => {
    if (!birthDay || !birthMonth || !birthYear) return null;
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getDaysInMonth = (month: number | null, year: number | null) => {
    if (!month || !year) return 31;
    return new Date(year, month, 0).getDate();
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
          <Image style={styles.image} source={require("../images/logo.png")} />
        </Svg>
      </View>

      <Animated.View
        style={[
          styles.form,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        {step === 1 && (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#f3eff5"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              placeholderTextColor="#f3eff5"
              value={subname}
              onChangeText={setSubname}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#f3eff5"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite uma senha"
              placeholderTextColor="#f3eff5"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              placeholderTextColor="#f3eff5"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              secureTextEntry={true}
            />
          </View>
        )}

        {step === 2 && (
          <View style={styles.genderButton}>
            <TouchableOpacity
              onPress={() => setGender("male")}
              activeOpacity={0.9}
            >
              <Animated.Image
                source={require("../images/mangym.png")}
                style={[
                  styles.genderCustom,
                  { tintColor: gender === "male" ? "#72b01d" : "#f3eff5" },
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender("female")}
              activeOpacity={0.9}
            >
              <Animated.Image
                source={require("../images/womangym.png")}
                style={[
                  styles.genderCustom,
                  { tintColor: gender === "female" ? "#72b01d" : "#f3eff5" },
                ]}
              />
            </TouchableOpacity>
          </View>
        )}

        {step === 3 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>1. Qual é o seu principal objetivo?</Text>
            {[
              { label: "Emagrecer", icon: "🔥" },
              { label: "Ganhar massa muscular", icon: "💪" },
              { label: "Melhorar condicionamento", icon: "🏃" },
              { label: "Manter a forma", icon: "✨" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 4 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>2. Você pratica exercícios físicos atualmente?</Text>
            {[
              { label: "Sim, com frequência (4x ou mais na semana)", icon: "🔥" },
              { label: "Sim, de vez em quando (1-3x por semana)", icon: "💪" },
              { label: "Raramente", icon: "🚶" },
              { label: "Não, mas quero começar agora", icon: "🌟" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 5 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>3. Como você se considera em relação à experiência de treino?</Text>
            {[
              { label: "Iniciante - nunca treinei ou estou começando", icon: "🌱" },
              { label: "Intermediário - já treino há um tempo", icon: "💪" },
              { label: "Avançado - treino há mais de 1 ano", icon: "🏋️" },
              { label: "Atleta - sigo a rotina e dieta corretamente", icon: "🏆" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 6 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>4. O que mais motiva você?</Text>
            {[
              { label: "Parecer mais atraente", icon: "😍" },
              { label: "Ficar mais forte", icon: "💪" },
              { label: "Melhorar minha saúde", icon: "❤️" },
              { label: "Me sentir confiante", icon: "✨" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 7 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>5. Quantos dias por semana você pretende treinar?</Text>
            {[
              { label: "1-2 dias", icon: "📅" },
              { label: "3-4 dias", icon: "📆" },
              { label: "5-6 dias", icon: "🗓️" },
              { label: "Todos os dias", icon: "🔥" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 8 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>6. Você possui alguma restrição física ou lesão?</Text>
            {[
              { label: "Sim, nos joelhos", icon: "🦵" },
              { label: "Sim, na coluna ou ombros", icon: "🫸" },
              { label: "Outras restrições", icon: "⚠️" },
              { label: "Não tenho nenhuma", icon: "✅" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 9 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>7. Onde você prefere fazer seus treinos?</Text>
            {[
              { label: "Na academia", icon: "🏋️" },
              { label: "Em casa", icon: "🏠" },
              { label: "Ao ar livre (Praça, parque, praia)", icon: "🌳" },
              { label: "Alternar entre os três", icon: "🔄" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 10 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>8. Você pretende usar algum tipo de peso nos seus treinos?</Text>
            {[
              { label: "Não, apenas com peso do corpo", icon: "🧘" },
              { label: "Sim, halteres", icon: "🏋️" },
              { label: "Sim, barra/academia", icon: "💪" },
              { label: "Sim, objetos da casa", icon: "🏠" },
            ].map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.optionButton,
                  goal === item.label && styles.optionButtonSelected,
                ]}
                onPress={() => setGoal(item.label)}
                activeOpacity={0.9}
              >
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item.label ? "#fff" : "#0d0a0b" },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step === 11 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>Qual sua data de nascimento?</Text>
            <View style={styles.datePickerContainer}>
              <View style={styles.datePickerColumn}>
                <Text style={styles.datePickerLabel}>DIA</Text>
                <Picker
                  selectedValue={birthDay}
                  onValueChange={(itemValue) => setBirthDay(itemValue)}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  mode="dialog"
                  dropdownIconColor="#72b01d"
                >
                  <Picker.Item label="-" value={null} />
                  {Array.from({ length: getDaysInMonth(birthMonth, birthYear) }, (_, i) => i + 1).map((day) => (
                    <Picker.Item key={day} label={`${day}`} value={day} />
                  ))}
                </Picker>
              </View>

              <View style={styles.datePickerColumn}>
                <Text style={styles.datePickerLabel}>MÊS</Text>
                <Picker
                  selectedValue={birthMonth}
                  onValueChange={(itemValue) => setBirthMonth(itemValue)}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  mode="dialog"
                  dropdownIconColor="#72b01d"
                >
                  <Picker.Item label="-" value={null} />
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <Picker.Item key={month} label={`${month}`} value={month} />
                  ))}
                </Picker>
              </View>

              <View style={styles.datePickerColumn}>
                <Text style={styles.datePickerLabel}>ANO</Text>
                <Picker
                  selectedValue={birthYear}
                  onValueChange={(itemValue) => setBirthYear(itemValue)}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  mode="dialog"
                  dropdownIconColor="#72b01d"
                >
                  <Picker.Item label="-" value={null} />
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <Picker.Item key={year} label={`${year}`} value={year} />;
                  })}
                </Picker>
              </View>
            </View>

            {birthDay && birthMonth && birthYear && (
              <View style={styles.ageDisplayContainer}>
                <Text style={styles.ageValue}>{calculateAge()} anos</Text>
              </View>
            )}
          </View>
        )}

        {step === 12 && (
          <View style={styles.sliderContainer}>
            <Text style={styles.questions}>Qual é o seu peso?</Text>
            <View style={styles.sliderWrapper}>
              <Text style={styles.sliderIcon}>⚖️</Text>
              <View style={styles.sliderValueDisplay}>
                <Text style={styles.sliderValue}>{weight}</Text>
                <Text style={styles.sliderUnit}>kg</Text>
              </View>
              <CustomSlider
                value={weight}
                onValueChange={setWeight}
                minimumValue={30}
                maximumValue={200}
                step={1}
              />
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>30 kg</Text>
                <Text style={styles.sliderLabel}>200 kg</Text>
              </View>
            </View>
          </View>
        )}

        {step === 13 && (
          <View style={styles.sliderContainer}>
            <Text style={styles.questions}>Qual é a sua altura?</Text>
            <View style={styles.sliderWrapper}>
              <Text style={styles.sliderIcon}>📏</Text>
              <View style={styles.sliderValueDisplay}>
                <Text style={styles.sliderValue}>{height}</Text>
                <Text style={styles.sliderUnit}>cm</Text>
              </View>
              <CustomSlider
                value={height}
                onValueChange={setHeight}
                minimumValue={100}
                maximumValue={250}
                step={1}
              />
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>100 cm</Text>
                <Text style={styles.sliderLabel}>250 cm</Text>
              </View>
            </View>
          </View>
        )}

        {step === 14 && (
          <View style={styles.sliderContainer}>
            <Text style={styles.questions}>Qual peso você deseja chegar?</Text>
            <View style={styles.sliderWrapper}>
              <Text style={styles.sliderIcon}>🎯</Text>
              <View style={styles.sliderValueDisplay}>
                <Text style={styles.sliderValue}>{targetWeight}</Text>
                <Text style={styles.sliderUnit}>kg</Text>
              </View>
              <CustomSlider
                value={targetWeight}
                onValueChange={setTargetWeight}
                minimumValue={30}
                maximumValue={200}
                step={1}
              />
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>30 kg</Text>
                <Text style={styles.sliderLabel}>200 kg</Text>
              </View>
            </View>
          </View>
        )}
      </Animated.View>

      <View>
        <TouchableOpacity onPress={nextStep} activeOpacity={0.8}>
          <LottieView
            source={require("../images/seta.json")}
            autoPlay
            loop
            style={styles.arrowAnimation}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
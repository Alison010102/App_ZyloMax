import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import Svg, { Path } from "react-native-svg";
import LottieView from "lottie-react-native";
import { Picker } from '@react-native-picker/picker';


export default function Register({ navigation }: { navigation: any }) {
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 11) {
      setStep(step + 1);
    } else {
      navigation.navigate("Home");
    }
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
      <View style={styles.form}>
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
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        )}

        {step === 2 && (
          <View style={styles.genderButton}>
            <TouchableOpacity onPress={() => setGender("male")}>
              <Image
                source={require("../images/mangym.png")}
                style={[
                  styles.genderCustom,
                  { tintColor: gender === "male" ? "#72b01d" : "#f3eff5" },
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGender("female")}>
              <Image
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
            <Text style={styles.questions}>
              1.Qual é o seu principal objetivo?
            </Text>

            {[
              "Emagrecer",
              "Ganhar massa muscular",
              "Melhorar condicionamento",
              "Manter a forma",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 4 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>
              2.Você pratica exercicios físicos atualmente?
            </Text>

            {[
              "Sim, com frequencia(4x ou mais na semana)",
              "Sim, de vez em quando(1-3x por semana)",
              "Raramente",
              "Não, mas quero começar agora",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 5 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>
              3.Como você se considera em relação a experiência de treino?
            </Text>

            {[
              "Iniciante - nunca treinei ou estou começando",
              "Intermediário - já treino há um tempo",
              "Avançado - treino há mais de 1 ano",
              "Atleta - sigo a rotina e dieta corretamente",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 6 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>4.O que mais motiva você?</Text>

            {[
              "Parecer mais atraente",
              "Ficar mais forte",
              "Melhorar minha saúde",
              "Me sentir confiante",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 7 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>
              5.Quantos dias por semana você pretende treinar?
            </Text>

            {["1-2 dias", "3-4 dias", "5-6 dias", "Todos os dias"].map(
              (item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.optionButton,
                    { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                  ]}
                  onPress={() => setGoal(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      { color: goal === item ? "#fff" : "#2d3142" },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        )}
        {step === 8 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>
              6.Você possui alguma restrição física ou lesão?
            </Text>

            {[
              "Sim, nos joelhos",
              "Sim, na coluna ou ombros",
              "Outras restrições",
              "Não tenho nenhuma",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 9 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>
              7.Onde você prefere fazer seus treinos?
            </Text>

            {[
              "Na academia",
              "Em casa",
              "Ao ar livre (Preça,parque,praia)",
              "Alternar entre os três",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 10 && (
          <View style={styles.goalContainer}>
            <Text style={styles.questions}>
              8.Você pretende usar algum tipo de peso nos seus treinos?
            </Text>

            {[
              "Não, apenas com peso do corpo",
              "Sim, halteres",
              "Sim, barra/academia",
              "Sim, objetos da casa",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  { backgroundColor: goal === item ? "#72b01d" : "#f3eff5" },
                ]}
                onPress={() => setGoal(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: goal === item ? "#fff" : "#2d3142" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {step === 11 && (
  <View style={styles.goalContainer}>
    <Text style={styles.questions}>Qual ano você nasceu?</Text>
    <Picker
      selectedValue={birthYear}
      onValueChange={(itemValue) => setBirthYear(itemValue)}
      style={styles.picker}
      itemStyle={{ color: '#2d3142', fontSize: 18 }}
    >
      {Array.from({ length: 100 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return <Picker.Item key={year} label={`${year}`} value={year} />;
      })}
    </Picker>
  </View>
)}

      </View>
      <View>
        <TouchableOpacity onPress={nextStep}>
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

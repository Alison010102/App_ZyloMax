import React from "react"
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import Svg, { Path } from "react-native-svg"

export default function Start({navigation}:{navigation:any}) {
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
                        d="M0,256L26.7,245.3C53.3,235,107,213,160,218.7C213.3,224,267,256,320,266.7C373.3,277,427,267,480,250.7C533.3,235,587,213,640,213.3C693.3,213,747,235,800,245.3C853.3,256,907,256,960,245.3C1013.3,235,1067,213,1120,197.3C1173.3,181,1227,171,1280,176C1333.3,181,1387,203,1413,213.3L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z" />
                    <Image style={styles.image}
                        source={require("../images/logo.png")}
                    />
                </Svg>
            </View>
            <TouchableOpacity style={styles.button}
             onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>Ainda não tem cadastro?</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Register")}
            >
                <Text style={styles.textButton2} >Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}  
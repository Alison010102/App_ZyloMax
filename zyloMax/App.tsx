import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "./screens/Login/login"
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        contentStyle: {backgroundColor:"#72b01d"},
        headerShown:false
      }}
      >
        <Stack.Screen name="Home" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>

  )}


import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/Login/login"
import Start from "./screens/Start/start"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login}/>
        
      </Stack.Navigator>
    </NavigationContainer>

  )
}


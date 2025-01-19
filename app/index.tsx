import React, { useEffect, useRef } from 'react';
import { Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from 'expo-linking';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const handleGoogleSignIn = () => {
    const googleSignInUrl = 'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26pli%3D1%26nlr%3D1&ec=GAlAwAE&hl=es_419&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S36007515%3A1737229245845513&ddm=1'; // Reemplaza con tu URL de la API de iniciar sesión en Google
    Linking.openURL(googleSignInUrl);
  };


  // Animación para el corazón (latir)
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Inicia la animación de latido
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Escala más grande para simular el latido
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Vuelve al tamaño original
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
  }, [scaleAnim]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#72cffc', '#e3f5ff']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
          <View className='absolute top-56'>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Image
            source={require("../assets/images/meditacion.png")}
            style={{ width: 40, height: 40 }}  />
          </Animated.View> 
          </View>
        <Text className="text-muted uppercase">Bienvenido a Healthbot</Text>
        <Text className="text-4xl font-bold mt-2 text-center">
          Controla tu salud desde <Text className="text-primary">la palma de tu mano</Text>
        </Text>
        <View className="items-center justify-center mt-10">
          <Text className="text-muted text-center">
            Inicia sesión en Healthbot
          </Text>
          <TouchableOpacity
            className="bg-primary px-4 py-2 rounded-lg mt-2 flex items-center flex-row gap-2"
            onPress={handleGoogleSignIn}
          >
            <Image
              source={require("../assets/images/google-logo.png")}
              className="w-5 h-5"
            />
            <Text className="text-white font-bold text-xl" >Continuar con Google!!!!!!</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
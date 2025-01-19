import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function Index() {
  const handleGoogleSignIn = () => {
    // Linking.openURL('onboarding.tsx');
    // const googleSignInUrl = 'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26pli%3D1%26nlr%3D1&ec=GAlAwAE&hl=es_419&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S36007515%3A1737229245845513&ddm=1';
    // // URL a google o conectar a api signIn google cloud 
    // Linking.openURL(googleSignInUrl);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#72cffe', '#e3f5ff']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text className="text-muted uppercase">Bienvenido a Healthbot</Text>
        <Text className="text-4xl font-bold mt-2 text-center">
          Controla tu salud desde <Text className="text-primary">la palma de tu mano</Text>
        </Text>
        <View className="items-center justify-center mt-10">
          <Text className="text-muted text-center">
            Inicia sesión en Healthbot
          </Text>
          <TouchableOpacity
            className='mt-2 bg-primary px-4 py-2 rounded-lg'
          // onPress={handleGoogleSignIn}
          >
            <Link
              href="/onboarding"
              // className='flex items-center gap-2 justify-center'
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require("../assets/images/google-logo.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-bold text-xl" >Continuar con Google</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
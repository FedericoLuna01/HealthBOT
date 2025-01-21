import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // Import el ícono de Ionicons

const QUESTIONS = [
  {
    id: 1,
    question: "Los últimos días tuve dolores de cabeza recurrentes. ¿Qué puedo hacer?",
  },
  {
    id: 2,
    question: "Los últimos días tuve dolores de cabeza recurrentes. ¿Qué puedo hacer?",
  },
  {
    id: 3,
    question: "Los últimos días tuve dolores de cabeza recurrentes. ¿Qué puedo hacer?",
  },
]

const Home = () => {
  const [inquietud, setInquietud] = useState("");
  const [isKeyboardActive, setIsKeyboardActive] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardActive(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardActive(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Función para manejar el envío
  const handleEnviar = () => {
    console.log("Inquietud enviada:", inquietud);
    setInquietud("");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="h-full items-center justify-between">
        <View className="flex-1 justify-center items-center flex-col mt-4 space-y-4 gap-3">
          <Text className="text-primary text-3xl font-bold mt-1 text-center">
            En qué puedo ayudarte hoy?
          </Text>
          {
            !isKeyboardActive && (
              <View>
                {
                  QUESTIONS.map((item) => (
                    <View className="max-w-sm border border-muted rounded-lg p-4">
                      <Text className="text-center text-muted">
                        {item.question}
                      </Text>
                    </View>
                  ))
                }
              </View>
            )
          }
        </View>
        {/* Input al final */}
        <View className="w-full px-4 mt-auto mb-4">
          <View className="relative">
            <TextInput
              className="border border-black rounded-lg p-3 pl-4 pr-12 w-full"
              placeholder="Ingrese su inquietud..."
              placeholderTextColor="#9CA3AF"
              value={inquietud}
              onChangeText={(text) => setInquietud(text)} // Actualizar el estado
            />
            <TouchableOpacity
              onPress={handleEnviar} // Llamar a la función handleEnviar al presionar el botón
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <Ionicons name="send" size={24} color="#00aaff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

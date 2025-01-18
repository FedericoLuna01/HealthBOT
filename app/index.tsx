import { Image, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      className="flex flex-1 bg-[#fdfdfd] justify-center items-center"
    >
      <Text className="text-muted uppercase">Bienvenido a Healthbot</Text>
      <Text className="text-4xl font-bold mt-2 text-center">
        <Text className="text-4xl font-bold mt-2 text-center">
          Controla tu salud desde <Text className="text-primary">la palma de tu mano</Text>
        </Text>
      </Text>
      <View
        className="items-center justify-center mt-10"
      >
        <Text className="text-muted text-center">
          Inicia sesión en Healthbot
        </Text>
        <TouchableOpacity
          className="bg-primary px-4 py-2 rounded-lg mt-2 flex items-center flex-row gap-2"
        >
          <Image
            source={require("../assets/images/google-logo.png")}
            className="w-8 h-8"
          />
          <Text className="text-white font-bold text-2xl">Continuar con Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

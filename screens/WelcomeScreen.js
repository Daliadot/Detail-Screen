import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

export default function WelcomeScreen() {
  // Definindo shared values para os paddings
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  // Animando os paddings ao carregar a tela
  useEffect(() => {
    // Atrasar a animação para garantir que o componente tenha renderizado
    setTimeout(() => {
      ring1padding.value = withSpring(hp(5), { damping: 10, stiffness: 100 }); // Animar o primeiro anel
      ring2padding.value = withSpring(hp(10), { damping: 10, stiffness: 100 }); // Animar o segundo anel
    }, 500); // Atraso para a animação iniciar após um pequeno tempo
  }, []);

  // Estilo animado para o primeiro anel
  const animatedRing1Style = useAnimatedStyle(() => {
    return {
      padding: ring1padding.value,
    };
  });

  // Estilo animado para o segundo anel
  const animatedRing2Style = useAnimatedStyle(() => {
    return {
      padding: ring2padding.value,
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313A4B' }}>
      <StatusBar barStyle="dark-content" />

      {/* Logo com animação de padding */}
      <Animated.View
        style={[
          { backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 9999 },
          animatedRing1Style, // Aplicando o estilo animado do primeiro anel
        ]}
      >
        <Animated.View
          style={[
            { backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 9999 },
            animatedRing2Style, // Aplicando o estilo animado do segundo anel
          ]}
        >
          <Image
            source={require('../assets/images/welcome.jpg')}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>

      {/* Título */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'white', letterSpacing: 2, fontSize: hp(7) }}>
          Care.ly
        </Text>

        <Text style={{ fontWeight: '500', color: 'white', letterSpacing: 2, fontSize: hp(2) }}>
          Conectando quem quer cuidar
        </Text>
      </View>
    </View>
  );
}

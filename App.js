import * as React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Bem-vindo ao app!! {'\n'}</Text>
      <Text>
        Visualize meu Curriculo</Text>
      <Pressable
        onPress={() => navigation.navigate('Curriculo')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Curriculo</Text>
      </Pressable>
    </View>
  );
}


function Curriculo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey'}}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Abaixo tem algumas informações do meu Currículo {'\n'}
      </Text>
      <Image
        source={require('./assets/fotopessoal.jpg')}
        style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
      />

      <Text style={styles.negrito}>Nome:<Text style={styles.curriculoText}>Anderson Lucena</Text></Text>
      <Text style={styles.negrito}>Idade:<Text style={styles.curriculoText}>24 Anos</Text></Text>
      <Text style={styles.negrito}>Cursos:<Text style={styles.curriculoText}>Fundamentos de Codificação,{'\n'} Introdução à Lógica de Programação, {'\n'} Certificado Scrum </Text></Text>
      <Text style={styles.negrito}>Educação:<Text style={styles.curriculoText}> Cursando Análise e{'\n'}  Desenvolvimento de Sistema- Senac -3P </Text></Text>
      <Text style={styles.negrito}>Habilidades:<Text style={styles.curriculoText}>Pacote office(avançado),{'\n'}HTML,CSS,JavaScript,{'\n'}Linguagem de Programação "C" e JAVA,{'\n'}Inglês(básico em conversação).</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  negrito: {
    fontSize: 16,
    marginBottom: 15,
  },
  curriculoText: {
    fontWeight: 'bold',
  
  },
});


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Curriculo" component={Curriculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log({ email, senha });
    navigation.navigate('Home' as never);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          mode="outlined"
          label="E-mail"
          placeholder="johndoe@example.com"
          value={email}
          onChangeText={text => setEmail(text)}
          right={<TextInput.Icon icon="email" />}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Senha"
          secureTextEntry={secureTextEntry}
          value={senha}
          onChangeText={text => setSenha(text)}
          right={<TextInput.Icon icon={secureTextEntry ? 'eye' : 'eye-off'} onPress={() => setSecureTextEntry(!secureTextEntry)} />}
        />

        <Button
          style={styles.button}
          mode="contained"
          onPress={handleLogin}>
          Entrar
        </Button>
        <Text style={{ textAlign: 'center' }}>Não tem uma conta? <Text style={{ color: 'purple' }} onPress={() => navigation.navigate('SignUp' as never)}>Registre-se</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50,
    marginTop: 200,
    textTransform: 'uppercase',
  },
  input: {
    marginHorizontal: 30,
    marginBottom: 30,
  },
  button: {
    marginHorizontal: 30,
    marginBottom: 30,
  }
});
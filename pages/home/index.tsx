import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Login from '../auth/sign-in';
import Cadastro from '../auth/sign-up';

const MyEventsRoute = () => <Text>Meus Eventos</Text>;
const EventsRoute = () => <Text>Todos os Eventos</Text>;
const ProfileRoute = () => <Text>Meu Perfil</Text>;

const Home = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'myevents', title: 'Meus Eventos', focusedIcon: 'qrcode' },
    { key: 'events', title: 'Eventos', focusedIcon: 'developer-board' },
    { key: 'profile', title: 'Perfil', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    myevents: MyEventsRoute,
    events: EventsRoute,
    profile: ProfileRoute,
  });

  const jumpTo = (key: string) => {
    const routeIndex = routes.findIndex(route => route.key === key);
    if (routeIndex !== -1) {
      setIndex(routeIndex);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <BottomNavigation
          style={styles.screen}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={({ route }) => (
            <View style={styles.centeredContent}>
              {renderScene({ route, jumpTo })}
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
import React from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import { Card, Button, Text, Avatar } from 'react-native-paper';

const events = [
 {
  name: 'AWS Summit',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. amet consectetur adipisicing elit. Quisquam, voluptates.',
  image: 'https://picsum.photos/700',
 },
 {
  name: 'Google I/O',
  description: 'Officiis nostrum consequuntur debitis earum.',
  image: 'https://picsum.photos/701',
 },
 {
  name: 'React Native Conf',
  description: 'Dolorum nisi aperiam fugit dolore! Consectetur, dolorum?',
  image: 'https://picsum.photos/702',
 },
];

export default function EventsComponent() {

 const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;
 const { width } = Dimensions.get('window');

 const renderItem = ({ item }: any) => (
  <View style={{ alignItems: 'center', width: width * 1.0 }}>
   <Card style={styles.card}>
   <Card.Content>
   <Text 
     variant="titleLarge" 
     numberOfLines={1} 
     ellipsizeMode="tail"
    >
     {item.name}
    </Text>
    <Text 
     variant="bodyMedium" 
     numberOfLines={2} 
     ellipsizeMode="tail"
    >
     {item.description}
    </Text>
   </Card.Content>
   <Card.Cover source={{ uri: item.image }} style={styles.cardCover} />
   <Card.Actions>
    <Button style={styles.button} mode="outlined" textColor="green">Inscrever-se</Button>
   </Card.Actions>
  </Card>
  </View>
 );

 return (
  <View style={styles.container}>
   <FlatList 
    data={events}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 paddingVertical: 20,
 },
 card: {
 marginVertical: 10,
 width: '90%',
 },
 cardCover: {
 marginTop: 24,
 marginHorizontal: 16,
 height: 200,
 },
 button: {
 marginHorizontal: 8,
 marginBottom: 8,
 marginTop: 16,
 }
});

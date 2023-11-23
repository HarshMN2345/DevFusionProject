import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assuming MaterialIcons are installed and imported properly

const Card = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.votes}>
          <TouchableOpacity onPress={() => {/* Handle upvote action */}}>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Handle downvote action */}}>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  votes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default Card;

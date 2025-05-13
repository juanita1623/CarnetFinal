import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Carnet() {
  const [isFront, setIsFront] = useState(true);

  const toggleSide = () => setIsFront(!isFront);

  return (
    <View style={styles.card}>
      {isFront ? (
        <>
          <Text style={styles.university}>Censa Medellín</Text>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.row}>
            <Image
              source={require('../assets/foto.png')}
              style={styles.photo}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Juana Ruiz</Text>
              <Text style={styles.info}>Matrícula: 1000411715</Text>
              <Text style={styles.info}>Tecnología: Analisis En Desarrollo de Software</Text>
              <Text style={styles.info}>Correo: juanam.ruizc@gmail.com</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <Image
            source={require('../assets/qr.png')}
            style={styles.qr}
            resizeMode="contain"
          />
        </>
      ) : (
        <View style={styles.backContent}>
          <Text style={styles.info}>Válido hasta: 31/10/2025</Text>
          <Text style={styles.info}>Este carnet es personal e intransferible</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={toggleSide}>
        <Text style={styles.buttonText}>Girar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fefef6',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  university: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#cccccc', 
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 4,
  },
  qr: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  backContent: {
    alignItems: 'center',
    marginVertical: 40,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

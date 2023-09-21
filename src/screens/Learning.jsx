import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Learning = ({ navigation, route }) => {

  const [level, setLevel] = useState('Seviye 5');
  const [totalPoints, setTotalPoints] = useState(1500);
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = () => {
    setDisplayText(`Girilen Bilgi: ${inputText}`);
  };

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılabilir
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.level}>{level}</Text>
        <Text style={styles.totalPoints}>Toplam Puan: {totalPoints}</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.sectionTitle}>Bilgi Girişi</Text>
        <TextInput
          style={styles.input}
          placeholder="Bilgi giriniz"
          onChangeText={handleInputChange}
          value={inputText}
        />
        <Text style={styles.inputText}>{displayText}</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.sectionTitle}>Oturumu Kapat</Text>
        <Button title="Çıkış Yap" onPress={handleLogout} />
        <Button title="Girişi Gönder" onPress={handleSubmit} />
      </View>
    </View>
  )
}

export default Learning

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6b3cc', // Mor ve pembe ağırlıklı arkaplan rengi
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  level: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6a0dad', // Mor renk
  },
  totalPoints: {
    fontSize: 18,
    color: '#e6005c', // Pembe renk
  },
  middleSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6a0dad', // Mor renk
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 16,
  },
  bottomSection: {
    alignItems: 'center',
  },
})
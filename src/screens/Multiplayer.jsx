import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native';

const gameHistoryData = [
  {
    id: '1',
    startWord: 'Tetris',
    finishWord: 'Kalem',
    achievements: [
      'Yüksek Skor Kazandınız!',
      'En Yüksek Puanı Elde Ettiniz!',
    ],
    rank: 'A',
  },
  {
    id: '2',
    startWord: 'Sudoku',
    finishWord: 'satranç',
    achievements: [
      'Tamamlandı: Zor Seviye',
      'En İyi Süreyi Elde Ettiniz!',
    ],
    rank: 'B',
  },
  {
    id: '3',
    startWord: 'Snake',
    finishWord: 'Uçak',
    achievements: [
      'Uzunluk Rekoru Kırdınız!',
      '5 Kez Öldünüz: Başarısız Oldunuz',
    ],
    rank: 'C',
  },
  // Diğer oyunlar...
];

const wordOptions = ['Elma', 'Armut', 'Muz', 'Portakal', 'Çilek', 'Üzüm'];


const Multiplayer = ({ navigation, route }) => {

  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordSelect = (word) => {
    setSelectedWord(word);
  };

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılabilir
  };


  const renderGameHistory = ({ item }) => (
    <View style={styles.gameCard}>
      <Image
        source={require('./../../assets/profile-img.jpeg')} // Oyun ikonunun yolu
        style={styles.gameIcon}
      />
      <View style={styles.gameInfo}>
        <Text style={styles.startWord}>{item.startWord} ~ {item.finishWord}</Text>
        <Text style={styles.achievements}>
          Başarılar: {item.achievements.join(', ')}
        </Text>
        <Text style={styles.rank}>Derece: {item.rank}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.cardInfo}>
        <Text style={styles.infoTitle}>Seviye Kilitli</Text>
        <Text style={styles.infoDescription}>
          Maalesef, bu özelliği kullanabilmek için seviyenizin yeterli olması gerekiyor.
          İleride seviyeniz yükseldiğinde bu özellik açılacak!
        </Text>
      </View>
      {/*yorum alanı*/}
      <View style={styles.card}>
        <Image
          source={require('./../../assets/profile-img.jpeg')} // Başarı ikonunun yolu
          style={styles.achievementIcon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Yüksek Skor!</Text>
          <Text style={styles.description}>
            Tebrikler! Son oyununuzda yüksek bir skor elde ettiniz.
          </Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>Ödül Kazandınız!</Text>
          </View>
        </View>
      </View>
      {/*yorum alanı*/}

      <View style={styles.container}>
        <Text style={styles.listTitle}>Oyun Geçmişi</Text>
        <FlatList
          data={gameHistoryData}
          keyExtractor={(item) => item.id}
          renderItem={renderGameHistory}
          contentContainerStyle={styles.gameHistoryList}
        />
      </View>


      {/*yorum alanı*/}



      <View style={styles.optionContainer}>
        <View style={styles.wordOptions}>
          {wordOptions.map((word) => (
            <TouchableOpacity
              key={word}
              style={[
                styles.wordOption,
                selectedWord === word && styles.selectedOption,
              ]}
              onPress={() => handleWordSelect(word)}
            >
              <Text style={styles.wordText}>{word}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.selectedWordContainer}>
          {selectedWord && (
            <Text style={styles.selectedWordText}>
              Seçilen Kelime: {selectedWord}
            </Text>
          )}
        </View>
        <Button title="Çıkış Yap" onPress={handleLogout} />
      </View>

    </>
  )
}

export default Multiplayer

const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoDescription: {
    fontSize: 16,
  },
  /////////////////
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  badgeContainer: {
    backgroundColor: '#6a0dad', // Mor renk
    borderRadius: 5,
    padding: 5,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
  },
  ////////////////////
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gameHistoryList: {
    paddingBottom: 20,
  },
  gameCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  gameIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  gameInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  startWord: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  achievements: {
    fontSize: 16,
    marginBottom: 5,
  },
  rank: {
    fontSize: 16,
  },
  /////////////
  optionContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  wordOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  wordOption: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#6a0dad', // Mor renk
  },
  wordText: {
    fontSize: 16,
    color: '#000',
  },
  selectedWordContainer: {
    marginBottom: 20,
  },
  selectedWordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a0dad', // Mor renk
  },
})
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'

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

const Profile = ({ navigation, route }) => {

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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>&lt; Geri</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('./../../assets/profile-img.jpeg')} // Avatar resminin yolu
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.status}>Çevrimiçi</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.listTitle}>Oyun Geçmişi</Text>
        <FlatList
          data={gameHistoryData}
          keyExtractor={(item) => item.id}
          renderItem={renderGameHistory}
          contentContainerStyle={styles.gameHistoryList}
        />
      </View>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#6a0dad',
    padding: 4,
  },
  backButton: {
    fontSize: 18,
    color: '#fff', // Mor renk
  },
  ///////////
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    color: 'green',
  },
  //////////
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
})
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Text, Input, Dialog } from '@rneui/themed'
import { words } from '../lib/word';
const turkce = require("turkce");

const Single = ({ navigation }) => {

    const [startCounter, setStartCounter] = useState(3)
    const [startWords, setStartWords] = useState([])
    const [selectedStartWord, setSelectedStartWord] = useState(null)
    const [finishWords, setFinishWords] = useState([])
    const [selectedFinishWord, setSelectedFinishWord] = useState(null)
    const [currentWord, setCurrentWord] = useState(null)
    const [visibleExitDialog, setVisibleExitDialog] = useState(false);
    const [visibleGameOverDialog, setVisibleGameOverDialog] = useState(false);

    const [secondsLeft, setSecondsLeft] = useState(0);
    const [loadingWidth, setLoadingWidth] = useState('100%');

    useEffect(() => {
        console.log("secondsLeft if başında : ", secondsLeft)
        if (!!selectedStartWord && !!selectedFinishWord) {
            const interval = setInterval(() => {
                if (secondsLeft >= 0) {
                    setSecondsLeft(secondsLeft - 1);
                    const percentage = (secondsLeft / 60) * 100;
                    setLoadingWidth(`${percentage}%`);
                }
            }, 1000);

            if (secondsLeft < 0) {
                return gameOver()
            }

            console.log("secondsLeft : ", secondsLeft)

            return () => clearInterval(interval);
        }
    }, [secondsLeft]);

    useEffect(() => {
        setInterval(() => setStartCounter((startCounter) => startCounter - 1), 1000);
        getWordDetail('uçak')
    }, [])

    useEffect(() => {
        getRandomGameWords()
    }, [words])

    const getRandomGameWords = () => {
        tempStartList = []
        tempFinishList = []
        for (var i = 0; i < 10; i++) {
            var randomIndex = Math.floor(Math.random() * words.length - 4)

            if (i % 2 == 0) {
                tempStartList.push(words[randomIndex])
            }
            else {
                tempFinishList.push(words[randomIndex])
            }
        }
        setStartWords(tempStartList)
        setFinishWords(tempFinishList)
    }

    const selectStartWord = (e) => {
        setSelectedStartWord(e)
    }

    const selectFinishWord = (e) => {
        setSelectedFinishWord(e)
        setSecondsLeft(60)
    }

    useEffect(() => {
        checkStartFinishWords()
    }, [selectedStartWord, selectedFinishWord])


    const checkStartFinishWords = () => {
        console.log("effeckt içinde", { a: selectedStartWord, b: selectedFinishWord })
        if (!!selectedStartWord && !!selectedFinishWord && selectedStartWord === selectedFinishWord) {
            setSelectedStartWord(null)
            setSelectedFinishWord(null)
        }
    }

    const getWordDetail = (word) => {

        (async () => {
            setCurrentWord(null)
            try {
                const sonuc = await turkce(word);

                if (sonuc.hasOwnProperty('anlam')) {
                    setCurrentWord(sonuc)
                }

            } catch (e) {
                console.error("error", e);
            }

        })();
    }

    const toggleExitDialog = () => {
        setVisibleExitDialog(!visibleExitDialog);
    };

    const toggleGameOverDialog = () => {
        setVisibleGameOverDialog(!visibleGameOverDialog);
    };

    const gameOver = () => {
        toggleGameOverDialog()
        getRandomGameWords()
    }

    const reStartGame = () => {
        toggleGameOverDialog()
        setSelectedStartWord(null)
        setSelectedFinishWord(null)
    }

    return (

        <View style={{ flex: 1, justifyContent: 'center', width: '100%', backgroundColor: '#e6b3cc' }}>
            {
                startCounter < 0 ?
                    <>

                        <View style={styles.card}>
                            {
                                !selectedStartWord && <>
                                    <View>
                                        <Text style={{ marginBottom: 10 }}>Başlangıç Kelimesini Seç</Text>
                                    </View>
                                    <View style={styles.wordOptions}>

                                        {
                                            startWords?.length > 0 && startWords.map((word, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={[
                                                        styles.wordOption
                                                    ]}
                                                    onPress={() => selectStartWord(word)}
                                                >
                                                    <Text style={styles.wordText}>{word}</Text>
                                                </TouchableOpacity>
                                            ))}
                                    </View>
                                </>
                            }
                            {
                                !selectedFinishWord && selectedStartWord && <>





                                    <View>
                                        <Text style={{ marginBottom: 10 }}>Bitiş Kelimesini Seç</Text>
                                    </View>
                                    <View style={styles.wordOptions}>

                                        {
                                            finishWords?.length > 0 && finishWords.map((word, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={[
                                                        styles.wordOption
                                                    ]}
                                                    onPress={() => selectFinishWord(word)}
                                                >
                                                    <Text style={styles.wordText}>{word}</Text>
                                                </TouchableOpacity>
                                            ))}
                                    </View>



                                </>
                            }
                            {
                                selectedFinishWord && selectedStartWord && <>





                                    <View style={styles.countDownContainer}>
                                        <View style={styles.loadingBar}>
                                            <View style={[styles.loadingFill, { width: loadingWidth }]} />
                                        </View>
                                    </View>




                                    <View style={styles.gameContainer}>
                                        <Text style={styles.startWord}>Başlangıç: {selectedStartWord}</Text>
                                        <Text style={styles.endWord}>Bitiş: {selectedFinishWord}</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Tahmininizi girin"
                                        //onChangeText={(text) => setUserGuess(text)}
                                        // value={userGuess}
                                        />
                                        <Button title="Gönder"  />
                                     <Text style={styles.correctText}>Doğru tahmin!</Text>
                                    </View>



                                </>
                            }
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button color="error" onPress={() => toggleExitDialog()}>Çıkış</Button>
                        </View>

                    </>
                    :
                    <>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                            <Text> Oyun Başlıyor... </Text>
                            <Text h1> {startCounter} </Text>
                        </View>
                    </>
            }


            <Dialog
                isVisible={visibleExitDialog}
                onBackdropPress={toggleExitDialog}
            >
                <Dialog.Title title="Yolculuktan Dönecek Misin?" />
                <Text>Bu yolculuk sensiz olmaz kaptan! Çıkmak istediğine emin misin?</Text>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    
                    <Button style={{ marginBottom: 10 }} color="success" size="sm" mode="contained" onPress={() => setVisibleExitDialog(false)}>Oyuna Devam Et</Button>
                    <Button type="outline" size="sm" mode="contained" onPress={() => navigation.navigate('Home')}>Çıkış!</Button>
                </View>
            </Dialog>

            <Dialog
                isVisible={visibleGameOverDialog}
            >
                <Dialog.Title title="Kaybettiniz" />
                <Text>Bu bir son değil. Yeni başarıların başlangıcı hatta! Hemen yeniden oyna.</Text>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <Button style={{ marginBottom: 10 }} color="success" size="sm" mode="contained" onPress={() => reStartGame()}>Yeni Oyuna Başla!</Button>
                    <Button type="outline" size="sm" mode="contained" onPress={() => navigation.navigate('Home')}>Çıkış!</Button>
                </View>
            </Dialog>
        </View>

    )
}

export default Single

const styles = StyleSheet.create({
    card: {
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
        backgroundColor: 'pink',
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


    //////////

    countDownContainer: {
        marginBottom: 10,
    },

    loadingBar:
    {
        height: 6,
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    loadingFill: {
        height: '100%',
        backgroundColor: '#6a0dad', // Mor renk
    },
    ///////////
    gameContainer: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    startWord: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    endWord: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    correctText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6a0dad', // Mor renk
        marginTop: 10,
    },

})
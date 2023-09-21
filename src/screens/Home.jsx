import { StyleSheet, Image, View, ScrollView, } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';

const Home = ({ navigation, route }) => {
    return (<>
        <ScrollView style={{ backgroundColor: '#525299', }}
            contentInsetAdjustmentBehavior="automatic">

            <View style={styles.container}>
                <View>
                    <Image style={styles.logo} source={require('./../../assets/logo.png')} />
                </View>
                <View style={styles.itemContainer}>

                    <View style={styles.item}>
                        <View style={{ position: "relative", borderRadius: 10, overflow: 'hidden', borderColor: '#477699', borderWidth: 1, backgroundColor: '#8265DA' }}>
                            <Image
                                style={{ width: "100%", resizeMode: 'contain', flex: 1, height: 'auto', aspectRatio: 1, }}
                                resizeMode="contain"
                                source={require('./../../assets/start-img.jpeg')}
                            />
                            <View style={{ padding: 10, backgroundColor: '#8265DA' }}>
                                <Text style={{ marginBottom: 16, color: 'white', fontSize: 16 }}>YALNIZ</Text>
                                <Button size='sm'
                                    containerStyle={{
                                        maxWidth: '50%'
                                    }}
                                    titleStyle={{ fontSize: 12 }}
                                    buttonStyle={{
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }} onPress={() => navigation.navigate('Single')}>Oyna</Button>
                            </View>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={{ position: "relative", borderRadius: 10, overflow: 'hidden', borderColor: '#477699', borderWidth: 1, backgroundColor: '#8265DA' }}>
                            <Image
                                style={{ width: "100%", resizeMode: 'contain', flex: 1, height: 'auto', aspectRatio: 1, }}
                                resizeMode="contain"
                                source={require('./../../assets/multiplayer-img.jpeg')}
                            />
                            <View style={{ padding: 10, backgroundColor: '#8265DA' }}>
                                <Text style={{ marginBottom: 16, color: 'white', fontSize: 16 }}>BİRLİKTE</Text>
                                <Button size='sm'
                                    containerStyle={{
                                        maxWidth: '50%'
                                    }}
                                    titleStyle={{ fontSize: 12 }}
                                    buttonStyle={{
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }} onPress={() => navigation.navigate('Multiplayer')}>Oyna</Button>
                            </View>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={{ position: "relative", borderRadius: 10, overflow: 'hidden', borderColor: '#477699', borderWidth: 1, backgroundColor: '#8265DA' }}>
                            <Image
                                style={{ width: "100%", resizeMode: 'contain', flex: 1, height: 'auto', aspectRatio: 1, }}
                                resizeMode="contain"
                                source={require('./../../assets/learning-img.jpeg')}
                            />
                            <View style={{ padding: 10, backgroundColor: '#8265DA' }}>
                                <Text style={{ marginBottom: 16, color: 'white', fontSize: 16 }}>ÖĞRETİCİ</Text>
                                <Button size='sm'
                                    containerStyle={{
                                        maxWidth: '50%'
                                    }}
                                    titleStyle={{ fontSize: 12 }}
                                    buttonStyle={{
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }} onPress={() => navigation.navigate('Learning')}>Git</Button>
                            </View>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={{ position: "relative", borderRadius: 10, overflow: 'hidden', borderColor: '#477699', borderWidth: 1, backgroundColor: '#8265DA' }}>
                            <Image
                                style={{ width: "100%", resizeMode: 'contain', flex: 1, height: 'auto', aspectRatio: 1, }}
                                resizeMode="contain"
                                source={require('./../../assets/profile-img.jpeg')}
                            />
                            <View style={{ padding: 10, backgroundColor: '#8265DA' }}>
                                <Text style={{ marginBottom: 16, color: 'white', fontSize: 16 }}>PROFİLİM</Text>
                                <Button size='sm'
                                    containerStyle={{
                                        maxWidth: '50%'
                                    }}
                                    titleStyle={{ fontSize: 12 }}
                                    buttonStyle={{
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }} onPress={() => navigation.navigate('Profile')}>Git</Button>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>
    </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'space-around',
    },
    logo: {
        maxHeight: 110,
        flex: 1,
        resizeMode: 'contain',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    },
    item: {
        width: '44%',
        margin: '3%',
    }
})
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ListFilm = ({title, type, tahun, url}) => {
    return (
        <View style={styles.container}>
            {url == 'N/A' ? (
                <View style={styles.empty}>
                    <Text>Gambar Tidak Tersedia</Text>
                </View>
            ) : (
                <Image style={styles.image} source={{uri:url}} />
            )}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text>{type}: {tahun}</Text>
            </View>
        </View>
    )
}

export default ListFilm

const styles = StyleSheet.create({
    container:{
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    empty:{
        alignItems: 'center',
        justifyContent: 'center',
        height:150,
        width: 100,
        marginRight: 10
    },
    titleWrapper:{
        flex: 1
    },
    title:{
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 18
    },
    image:{
        height:150,
        width: 100,
        marginRight: 10
    }
})

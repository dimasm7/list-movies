import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ButtonSearch, Counter, ListFilm } from '../../components'

const Home = () => {
    const [data, setData] = useState([]);
    const [film, setFilm] = useState('');
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [nameFilm, setNameFilm] = useState('Doraemon');
    useEffect(() => {
        getData();
    }, [page])
    
    const getData = () => {
        axios.get(`http://www.omdbapi.com/?apikey=715289b&s=${nameFilm}&page=${page}`)
        .then((res) => {
            if(res.data.Search){
                setData(res.data.Search)
                setMaxPage(res.data.totalResults / 10)
            }
        })
    }
    const search = () => {
        setPage(1)
        setNameFilm(film);
        getData()
    }
    const onCounterChange = (type) => {
        if(type === 'prev'){
            if(page > 1) setPage(page - 1)
        }
        if(type === 'next'){
            if(page < maxPage) setPage(page + 1)
        }
    }
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    value={film} 
                    onChangeText={(val) => setFilm(val)} 
                    placeholder={'search name'}
                    />
                <ButtonSearch onPress={search} />
            </View>

            <ScrollView 
                style={styles.wrapperFilm} 
                showsVerticalScrollIndicator={false}
            >
                {data.map((film, key) => {
                    return(
                        <ListFilm 
                            key={key}
                            title={film.Title}
                            url={film.Poster}
                            type={film.Type}
                            tahun={film.Year}
                        />
                    )
                })}
            </ScrollView>
            <View style={styles.pagination}>
                <Counter text='Prev' onPress={() => {onCounterChange('prev')}} />
                <View style={styles.wrapperPagination}>
                    <Text>
                        {page}
                    </Text>
                </View>
                <Counter text='Next' onPress={() => {onCounterChange('next')}} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        flex: 1,
        padding: 20,
    },
    input:{
        borderColor: '#000',
        borderWidth: 1,
        flex: 1
    },
    container:{
        flexDirection: 'row',
        marginBottom: 10
    },
    pagination:{
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperPagination:{
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

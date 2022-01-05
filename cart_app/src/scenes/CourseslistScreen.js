import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import useResults from '../hooks/useResults';
import { Entypo } from '@expo/vector-icons';

const CourseslistScreen = ({ navigation }) => {

    const [editCourse, getCourses, getCartCourses, state] = useResults();

    useEffect(() => {

        getCourses();

        const listener = navigation.addListener('focus', () => {
            getCourses();
        })

        return () => {
            listener.remove();
        };

    }, []);

    return (
        <SafeAreaView>
            <View style={styles.bodyStyle}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cartitems')}
                    >
                        <Entypo name="shopping-cart" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image />
                </View>
                <View>
                    <FlatList
                        data={state}
                        keyExtractor={blogPost => blogPost.title}
                        renderItem={({ item }) => {

                            return (

                                < View style={styles.row} >
                                    <Text style={styles.title}>{item.title} </Text>
                                    {
                                        item.added !== '1' ? <TouchableOpacity
                                            onPress={() => editCourse(item.id, '1', item.author, item.date_created, item.image_url, item.name, item.stock, item.title, () => {
                                                navigation.navigate('Courseslist');
                                            })}
                                        ><Text>Add to cart</Text></TouchableOpacity> : <Text>Added to cart</Text>
                                    }

                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        </SafeAreaView >
    );

};

const styles = StyleSheet.create({
    bodyStyle: {
        backgroundColor: '#f0f',
    },
    homeButtonStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 30,
        left: 135,
        bottom: 14,
        borderRadius: 50,
    },
    homeButtonImageStyle: {
        height: 30,
        width: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default CourseslistScreen;
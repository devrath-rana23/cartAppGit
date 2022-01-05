import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import useResults from '../hooks/useResults';

const CartitemsScreen = ({ navigation }) => {

    const [editCourse, getCourses, getCartCourses, state] = useResults();


    useEffect(() => {

        getCartCourses();

        const listener = navigation.addListener('focus', () => {
            getCartCourses();
        })

        return () => {
            listener.remove();
        };


    }, []);

    return (
        <SafeAreaView>
            <View style={styles.bodyStyle}>
                <View>
                    <Image />
                </View>
                <View>
                    <FlatList
                        data={state}
                        keyExtractor={blogPost => blogPost.title}
                        renderItem={({ item }) => {

                            return (

                                < View  >

                                    {
                                        item.added === '1' ? <View style={styles.row}><Text style={styles.title}>{item.title} </Text><TouchableOpacity
                                            onPress={() => editCourse(item.id, '0', item.author, item.date_created, item.image_url, item.name, item.stock, item.title, () => {
                                                navigation.navigate('Cartitems');
                                            })}
                                        ><Text>Remove from cart</Text></TouchableOpacity></View> : null
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
        backgroundColor: '#0f0',
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

export default CartitemsScreen;
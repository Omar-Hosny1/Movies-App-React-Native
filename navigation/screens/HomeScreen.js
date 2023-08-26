import * as React from 'react';
import {Text, View, FlatList, SafeAreaView, Image, } from 'react-native';




const HomeScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.center}>
            <FlatList>
                <View >
                    <Text style={styles.title}>Home Screen</Text>
                
                </View>
            </FlatList>
        </SafeAreaView>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#301934',
    },
    title:{
        fontSize:25,
        marginVertical: 2,
        color: 'white',
    },


});
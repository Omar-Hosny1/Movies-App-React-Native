import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import {Text, View, FlatList, SafeAreaView, Image, TextInput} from 'react-native';
import Constants from './MainContainer/Constants';

// type ItemMovie = {
//     img: Image;
//     title : String;
// };
// const DATAMOVIE: ItemMovie[]=[
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie1'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie2'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie3'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie4'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie5'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie6'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie7'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie8'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie9'
//     },
//     {
//         img:{source:require('./../../assets/images/movie1.jpg')},
//         title: 'Movie10'
//     },
// ];

// type ItemClick = {
//     item: ItemMovie;
//     backgroundColor: ImageBackground;
//     onPress: () => void;
// };

// const Item =({item, onPress,backgroundColor}: ItemClick) =>(
    
    
// );

const MoviesScreen = () =>{
    const [searchText, setSearchText] = useState("");
    const handleSearch = (text) =>{
        setSearchText(text);
    }
    return(
        <NavigationContainer>
            <StackActions>
                <SafeAreaView style={styles.center}>
                    <View style={headerStyle.headerStyle}>
                        <Text style={headerStyle.headerTitleStyle}>Movies Screen</Text>
                        <TextInput style={searchBox} 
                        placeholder='Search' 
                        clearButtonMode='always'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={searchText}
                        onChangeText={(text) => handleSearch(text)}
                        />
                    </View>
                    <FlatList style={styles.FlatListStyles} numColumns={2}  
                    renderItem={({item}) => this.ItemMovie(item)}>
                        <View style={styles.Card}>
                            <Text >Movies Screen</Text>
                        </View>
                    </FlatList>
               </SafeAreaView>
           </StackActions>
        </NavigationContainer>
    );
}
export default MoviesScreen;

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: {color: Constants.baseColor},
      marginHorizontal: 20,
    },
    FlatListStyles:{
        flex: 1,
        justifyContent:'center',
        flexDirection:'column'
    },
    Card:{
        backgroundColor: '#FD8D14',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 8,
        width: 100,
        height: 200,
    },
    

});
const searchBox = {
    borderWidth: 1,
    color:{color: Constants.searchInputColor},
    borderColor: {color: Constants.baseColor},
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
};
const headerStyle = {
    fontSize: 25,
    headerStyle: {backgroundColor: Constants.baseColor},
    headerTitleStyle: {color: Constants.textColor}
};
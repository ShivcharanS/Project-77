import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,Platform,Image,ImageBackground,TouchableOpacity } from 'react-native';
import DailyPic from "./screens/DailyPic";
import SpaceCraft from "./screens/SpaceCraft";
import StarMap from "./screens/StarMap";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require("./assets/stars.gif")}></ImageBackground>

                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        
                        <Text style={styles.titleText}>Stellar App</Text>
                        <Image source={require("./assets/main-icon.png")} style={{width:80 , height:80}}></Image>

                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("DailyPic")}}>

                        <Text style={styles.routeText}>DailyPic</Text>
                        <Image source={require("./assets/daily_pictures.png")} style ={{width:80,height:80}}></Image>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("StarMap")}}>

                        <Text style={styles.routeText}>StarMap</Text>
                        <Image source={require("./assets/star_map.png")} style ={{width:80,height:80}}></Image>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("SpaceCraft")}}>

                        <Text style={styles.routeText}>SpaceCraft</Text>
                        <Image source={require("./assets/spacecraft.png")} style ={{width:80,height:80}}></Image>

                    </TouchableOpacity>
            
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop: Platform.OS==="android"?StatusBar.currentHeight:0,
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30,

    }
    
})
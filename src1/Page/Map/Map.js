import React from "react";
import {
  AppRegistry,
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  WebView,
  ImageBackground
} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Title,
  Input,
  InputGroup,
  Tab,
  Tabs,
  Label
} from "native-base";
// import HomeScreen from "../../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
// import PropTypes from "prop-types";

var full = Dimensions.get('window').width; //full width
// import Footer from "./footer/footer"
export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
    }}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.bgHeader}>
          <Text style={{color:'white', fontSize:20}}>Desa</Text><Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>PINTAR</Text>
        </View>
        {/* KONTEN MULAI */}
        <ImageBackground
  source={require("../../ass3t/dp/peta.png")}
  style={{width: '100%', height: '93%'}}
> 
</ImageBackground>
        <View style={{ flex: 1 }}>
          <View style={style.menubar}>
          <TouchableOpacity
            onPress={() => navigate("MenuUtama")}
            // active={props.navigationState.index === 0}
            // onPress={() => pr  ops.navigation.navigate("MenuUtama")}
            style={style.menubar1}
          >
            <Image
                      source={require("../../ass3t/dp/icon-home.png")}
                      style={style.gmtombol1}
                    />
            <Text style={{ color: "black", alignSelf: "center", fontSize: 10 }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Layanan")}
            // active={props.navigationState.index === 1}
            // onPress={() => props.navigation.navigate("Info")}
            style={style.menubar1}
          >
            <Image
                      source={require("../../ass3t/dp/icon-layanan.png")}
                      style={style.gmtombol1}
                    />
            <Text style={{ color: "black", alignSelf: "center", fontSize: 10 }}>
              Layanan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Map")}
            // active={props.navigationState.index === 1}
            // onPress={() => props.navigation.navigate("Info")}
            style={style.menubar1}
          >
            <Image
                      source={require("../../ass3t/dp/icon-map-active.png")}
                      style={style.gmtombol1}
                    />
            <Text style={{ color: "black", alignSelf: "center", fontSize: 10 }}>
              Map
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Laporan")}
            // active={props.navigationState.index === 2}
            // onPress={() => props.navigation.navigate("Pesan")}
            style={style.menubar1}
          >
            <Image
                      source={require("../../ass3t/dp/icon-laporan.png")}
                      style={style.gmtombol1}
                    />
            <Text style={{ color: "black", fontSize: 10 }}>Laporan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Akun")}
            // active={props.navigationState.index === 3}
            // onPress={() => props.navigation.navigate("Akun")}
            style={style.menubar1}
          >
            <Image
                      source={require("../../ass3t/dp/icon-user-a.png")}
                      style={style.gmtombol1}
                    />
            <Text style={{ color: "black", fontSize: 10 }}>Akun</Text>
          </TouchableOpacity>
        </View>
          </View>
      </View>
      
    );
  }
}
const style = StyleSheet.create({
  tabs:{
    height:45,
    backgroundColor: "#2fc7ae",
    elevation:6,
    flexDirection: "row",
    justifyContent:'center',
  },
  tabs1: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft:30,
    paddingRight:30
    // position: "absolute", height:60,left: 0, right: 0, bottom: 0 
  },
  bgHeader: {
    backgroundColor: "#2fc7ae",
    height: 50,
    flexDirection: "row",
    elevation: 6,
    borderColor: "white",
    justifyContent:'center',
    alignItems:'center'
  },
  container:{
    flex:1,
    // backgroundColor:'orange'
  },
  body:{
    flex:1,
    backgroundColor:'red'
  },
  menubar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
    height: 60,
    position: "absolute", height:60,left: 0, right: 0, bottom: 0 
    // borderColor:"white",
    // borderTopWidth:1
  },
  gmtombol1: {
    // borderRadius:8,
    // borderColor:'#ccc',
    // alignItems:'center',
    // elevation:8,
    width: 30,
    height: 30,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  menubar1: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    // position: "absolute", height:60,left: 0, right: 0, bottom: 0 
  },
  card:{
    width:full,
    height:100,
    borderRadius:6,
    borderColor:'#ccc',
    // alignItems:'center',
    elevation:3,
    // alignSelf:'center',
    // justifyContent:"center",
    flexDirection:"row",
    // marginLeft:5,
    // marginRight:5,
    marginTop:10,
},

gambar:{
  height:150, 
  // alignItems:'center', 
  justifyContent:'center',
  // width:150,
  paddingLeft:10,
  alignSelf:'center',
  // flex:0.3,
},
deskripsi:{
  position: "absolute", bottom: 0, right: 0
},
judul:{
  width:'70%'
},
meta:{
  marginLeft:5,
  // backgroundColor:'red'
}
});

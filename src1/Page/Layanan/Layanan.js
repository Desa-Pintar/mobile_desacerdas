import React from "react";
import {
  AppRegistry,
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,

} from "react-native";
import {
  Button,
  Text
} from "native-base";
// import HomeScreen from "../../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
// import PropTypes from "prop-types";
var full = Dimensions.get('window').width; //full width
// import Footer from "./footer/footer"
export default class Layanan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: "Desa PONGGOK",
          caption: "Desa Wisata Air",
          url:
            "http://desa.proitdev.com/uploads/gambar/slider/20171124131016.jpg"
        },
        {

          title: "Corporate Farming",
          caption: "Kebijakan Baru, Perkuat Produksi Petani",
          url:
            "http://desa.proitdev.com/uploads/gambar/thumbnail/Corporate_Farming20171124131121.jpg"
        },
        {
          title: "SMART GOVERMENT",
          caption: "Effective, Efficiency, Participatory and Transparency",

          url:
            "http://desa.proitdev.com/uploads/gambar/thumbnail/Smart_Government20171124131109.jpg"
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.bgHeader}>
          <Text style={{ color: 'white', fontSize: 20 }}>Desa</Text><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>PINTAR</Text>
        </View>
        {/* KONTEN MULAI */}
        <ScrollView>
          {/* <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
            style={{ height: 10 }}
          /> */}
          <View style={style.card1}>
            <TouchableOpacity style={style.isiLayanan}>
              <Image
                source={require("../../ass3t/dp/white.png")}
                style={{ height: 70, width: 70, }}
              />
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Kependudukan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.isiLayanan}>
              <Image
                source={require("../../ass3t/dp/white.png")}
                style={{ height: 70, width: 70, }}
              />
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Kesehatan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.isiLayanan}>
              <Image
                source={require("../../ass3t/dp/white.png")}
                style={{ height: 70, width: 70, }}
              />
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Pendidikan</Text>
            </TouchableOpacity>
          </View>
          <View style={style.card1}>
            <TouchableOpacity style={style.isiLayanan}>
              <Image
                source={require("../../ass3t/dp/white.png")}
                style={{ height: 70, width: 70, }}
              />
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Pertanahan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.isiLayanan}>
              <Image
                source={require("../../ass3t/dp/white.png")}
                style={{ height: 70, width: 70, }}
              />
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Kesehatan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.isiLayanan}>
              <Image
                source={require("../../ass3t/dp/white.png")}
                style={{ height: 70, width: 70, }}
              />
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Pendidikan</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#2fc7ae', borderRadius: 20, height: 40, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigate("LayananKependudukan")}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}> PROGRES </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#e8697c', borderRadius: 20, height: 40, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}> INFORMASI </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 90 }} />
        </ScrollView>
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
                source={require("../../ass3t/dp/icon-layanan-a.png")}
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
                source={require("../../ass3t/dp/icon-map.png")}
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
                source={require("../../ass3t/dp/icon-user.png")}
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
  tabs: {
    height: 45,
    backgroundColor: "#2fc7ae",
    elevation: 6,
    flexDirection: "row",
    justifyContent: 'center',
  },
  card1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20
  },
  isiLayanan: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    elevation: 4,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.1
  },
  tabs1: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30
    // position: "absolute", height:60,left: 0, right: 0, bottom: 0 
  },
  bgHeader: {
    backgroundColor: "#2fc7ae",
    height: 50,
    flexDirection: "row",
    elevation: 6,
    borderColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    // backgroundColor:'orange'
  },
  body: {
    flex: 1,
    backgroundColor: 'red'
  },
  menubar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
    height: 60,
    position: "absolute", height: 60, left: 0, right: 0, bottom: 0
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
  card: {
    width: full,
    height: 100,
    borderRadius: 6,
    borderColor: '#ccc',
    // alignItems:'center',
    elevation: 3,
    // alignSelf:'center',
    // justifyContent:"center",
    flexDirection: "row",
    // marginLeft:5,
    // marginRight:5,
    marginTop: 10,
  },

  gambar: {
    height: 150,
    // alignItems:'center', 
    justifyContent: 'center',
    // width:150,
    paddingLeft: 10,
    alignSelf: 'center',
    // flex:0.3,
  },
  deskripsi: {
    position: "absolute", bottom: 0, right: 0
  },
  judul: {
    width: '70%'
  },
  meta: {
    marginLeft: 5,
    // backgroundColor:'red'
  }
});

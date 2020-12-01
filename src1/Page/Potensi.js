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
  FlatList,
  RefreshControl,
  TouchableNativeFeedback
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
// import HomeScreen from "../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
// import PropTypes from "prop-types";
// import Footer from "./footer/footer"
export default class Potensi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataApi:[],
      dataSource: [
        {
          title: "Desa Ponggok",
          caption: "Desa Wisata Air",
          url:
            "http://desa.proitdev.com/uploads/gambar/slider/20171124131016.jpg"
        },
        {
          title: "SMART GOVERMENT",
          caption: "Effective, Efficiency, Participatory and Transparency",
          url:
            "http://desa.proitdev.com/uploads/gambar/thumbnail/Corporate_Farming20171124131121.jpg"
        },
        {
          title: "Corporate Farming",
          caption: "Kebijakan Baru, Perkuat Produksi Petani",
          url:
            "http://desa.proitdev.com/uploads/gambar/thumbnail/Smart_Government20171124131109.jpg"
        }
      ]
    };
  }
  componentDidMount() {
    this.getPotensi();
  }
  _onRefresh() {
    this.setState({ refreshing: true });
    this.getPotensi().then(() => {
      this.setState({ refreshing: false });
    });
  }
getPotensi = async () => {
  const url = "http://desa.proitdev.com/Api2/potensi?api_key=$2y$10$efC2m3JMqJaiCp32WsOR1e8.Io/lAqVnjWc57HVeletlCdliYd3wC";
  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        dataApi: responseJson.potensi
      });
    })
    .catch(error => {
      console.log(error);
    });
};
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
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <TouchableNativeFeedback
              refreshing={this.state.refreshing}
              onPress={this._onRefresh.bind(this)}
            >
        <View style={style.bgHeader}>
            
          <Text style={{color:'white', fontSize:20}}>Desa</Text><Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>CERDAS</Text>
        </View>
        </TouchableNativeFeedback>
        <ScrollView>
            {/* <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })}
              style={{ height: 10 }}
            /> */}
          <View style={style.tabs}>
          <TouchableOpacity
            onPress={() => navigate("MenuUtama")}
            // active={props.navigationState.index === 0}
            // onPress={() => pr  ops.navigation.navigate("MenuUtama")}
            style={style.tabs1}
          >
            <Text style={{ color: "white", alignSelf: "center", fontSize: 15 }}>
              Berita
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Informasi")}
            // active={props.navigationState.index === 1}
            // onPress={() => props.navigation.navigate("Info")}
            style={style.tabs1}
          >
            <Text style={{ color: "white", alignSelf: "center", fontSize: 15 }}>
              Informasi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Potensi")}
            // active={props.navigationState.index === 2}
            // onPress={() => props.navigation.navigate("Pesan")}
            style={{alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingLeft:30,
            paddingRight:30,
            backgroundColor:'#26a590',
            borderRadius:8}}
            
          >
            <Text style={{ color: "white", fontSize: 15 }}>Potensi</Text>
          </TouchableOpacity>
          </View>
          {/* Konten Potensi */}
          <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          data={this.state.dataApi}
          keyExtractor={item => item.idPotensi}
          renderItem={({ item }) => (
          <View style={style.berita}>
          <View style={style.card}>

                <View  style={style.gambar}>
                <Image source={{uri: item.gambar_pWarga}} style={{height:90, width:90}}/>
                </View>
                <View style={style.meta}>
                    <View style={style.judul}>
                        <TouchableOpacity onPress={() => {
              this.setState({ konten: item.kontent, judul: item.judul, gambar:item.gambar, namaKategori:item.namaKategori, tanggal:item.created_at});;this.setModalVisible(true);
        }}><Text style={{ fontSize:13, color:'black', paddingRight:10, fontSize:20}}>{item.nama}</Text></TouchableOpacity>
                    </View>
                    <View style={style.deskripsi}>
                        <Text style={{fontSize:10, paddingTop:10, color:'green', fontSize:15}}> {item.keahlian}</Text>
                    </View>
                </View>
          </View>
         
          <View style={{height:10}}/>

          </View>
        )}
          /> 
          <View style={{height:90}}/>
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
                      source={require("../ass3t/dp/icon-home-a.png")}
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
                      source={require("../ass3t/dp/icon-layanan.png")}
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
                      source={require("../ass3t/dp/icon-map.png")}
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
                      source={require("../ass3t/dp/icon-laporan.png")}
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
                      source={require("../ass3t/dp/icon-user.png")}
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
    // width:'100%',
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
  marginTop:5,
  // borderTopWidth:0.5
},
judul:{
  // width:'90%'
  // paddingRight:4
  // margin:30
},
meta:{
  marginLeft:5,
  // marginRight:30
  // backgroundColor:'red'
}
});

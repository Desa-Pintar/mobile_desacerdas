import React from 'react';
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
  RefreshControl,
  FlatList,
  TouchableNativeFeedback,
  YellowBox,
} from 'react-native';
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
  Label,
} from 'native-base';
// import HomeScreen from "../../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
// import PropTypes from "prop-types";
var full = Dimensions.get('window').width; //full width
// import Footer from "./footer/footer"

const gbr1 = require('../../ass3t/gbr1.jpg');
const gbr2 = require('../../ass3t/gbr2.jpg');
const gbr3 = require('../../ass3t/gbr3.jpg');
const gbr4 = require('../../ass3t/gbr4.jpg');

const datas = [
  {
    judul: 'Panen Buah Mangga Melimpah',
    namaKategori: 'SAWAH DAN KEBUN',
    laporan: 'Panen Buah Mangga Melimpah',
    status: 'Belum Ditanggapi',
    tanggal: '2020-11-09 12:04:21',
    foto: gbr1,
  },
  {
    judul: 'Jalan Rusak',
    namaKategori: 'SAWAH DAN KEBUN',
    laporan: 'Jalan Rusak',
    status: 'Belum Ditanggapi',
    tanggal: '2020-11-09 12:04:21',
    foto: gbr2,
  },
  {
    judul: 'Pohon Tumbang',
    namaKategori: 'SAWAH DAN KEBUN',
    laporan: 'Pohon Tumbang',
    status: 'Belum Ditanggapi',
    tanggal: '2020-11-09 12:04:21',
    foto: gbr3,
  },
  {
    judul: 'Hama Keong di Sawah',
    namaKategori: 'SAWAH DAN KEBUN',
    laporan: 'Hama Keong di Sawah',
    status: 'Belum Ditanggapi',
    tanggal: '2020-11-09 12:04:21',
    foto: gbr4,
  },
];

export default class MenuUtama extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataJson: datas,
      position: 1,
      interval: null,
      dataSource: [],
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.getLaporan().then(() => {
      this.setState({refreshing: false});
    });
  }
  componentDidMount() {
    this.getLaporan();
  }
  getLaporan = async () => {
    const url =
      'http://desa.proitdev.com/Api2/laporan?api_key=$2y$10$efC2m3JMqJaiCp32WsOR1e8.Io/lAqVnjWc57HVeletlCdliYd3wC';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.laporan,
        });
      })
      .catch((error) => {
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
              : this.state.position + 1,
        });
      }, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <TouchableNativeFeedback
          refreshing={this.state.refreshing}
          onPress={this._onRefresh.bind(this)}>
          <View style={style.bgHeader}>
            <Text style={{color: 'white', fontSize: 20}}>Desa</Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              CERDAS
            </Text>
          </View>
        </TouchableNativeFeedback>
        {/* KONTEN MULAI */}
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          data={this.state.dataJson}
          keyExtractor={(item) => item.namaKategori}
          renderItem={({item}) => (
            <View style={style.laporan}>
              <View style={style.card}>
                <View style={style.gambar}>
                  <Image
                    source={item.foto}
                    style={{height: 150, width: '100%'}}
                  />
                </View>

                <View style={style.meta}>
                  <View style={style.judul}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontSize: 13,
                          color: 'black',
                        }}>
                        {item.laporan}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={style.response}>
                  <TouchableOpacity style={style.btResponse}>
                    <Text
                      style={{
                        color: 'white',
                        alignSelf: 'center',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      Belum Ditanggapi
                    </Text>
                  </TouchableOpacity>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        alignSelf: 'center',
                        fontSize: 10,
                      }}>
                      {/* <Icon name="time" style={{width:10, height:10}}/> */}
                      {item.tanggal}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{height: 10}} />
            </View>
          )}
        />
        <View style={{height: 90}} />
        <View style={{flex: 1}}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              paddingBottom: 70,
              paddingRight: 10,
              elevation: 7,
            }}>
            <TouchableOpacity
              onPress={() => navigate('Kamera')}
              style={{
                height: 35,
                width: 120,
                backgroundColor: 'red',
                justifyContent: 'center',
                borderRadius: 150,
              }}>
              {/* <Image
                      source={require("../../ass3t/dp/icon-lapor.png")}
                      style={{height:10, width:10}}
                    /> */}
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Laporkan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.menubar}>
            <TouchableOpacity
              onPress={() => navigate('MenuUtama')}
              // active={props.navigationState.index === 0}
              // onPress={() => pr  ops.navigation.navigate("MenuUtama")}
              style={style.menubar1}>
              <Image
                source={require('../../ass3t/dp/icon-home.png')}
                style={style.gmtombol1}
              />
              <Text style={{color: 'black', alignSelf: 'center', fontSize: 10}}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Layanan')}
              // active={props.navigationState.index === 1}
              // onPress={() => props.navigation.navigate("Info")}
              style={style.menubar1}>
              <Image
                source={require('../../ass3t/dp/icon-layanan.png')}
                style={style.gmtombol1}
              />
              <Text style={{color: 'black', alignSelf: 'center', fontSize: 10}}>
                Layanan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Map')}
              // active={props.navigationState.index === 1}
              // onPress={() => props.navigation.navigate("Info")}
              style={style.menubar1}>
              <Image
                source={require('../../ass3t/dp/icon-map.png')}
                style={style.gmtombol1}
              />
              <Text style={{color: 'black', alignSelf: 'center', fontSize: 10}}>
                Map
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Laporan')}
              // active={props.navigationState.index === 2}
              // onPress={() => props.navigation.navigate("Pesan")}
              style={style.menubar1}>
              <Image
                source={require('../../ass3t/dp/icon-laporan-a.png')}
                style={style.gmtombol1}
              />
              <Text style={{color: 'black', fontSize: 10}}>Laporan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Akun')}
              // active={props.navigationState.index === 3}
              // onPress={() => props.navigation.navigate("Akun")}
              style={style.menubar1}>
              <Image
                source={require('../../ass3t/dp/icon-user.png')}
                style={style.gmtombol1}
              />
              <Text style={{color: 'black', fontSize: 10}}>Akun</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  bgHeader: {
    backgroundColor: '#2E2E2E',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 6,
    borderColor: 'white',
  },
  container: {
    flex: 1,
    // backgroundColor:'blue'
  },
  body: {
    flex: 1,
    backgroundColor: 'red',
  },
  menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    height: 60,
    position: 'absolute',
    height: 60,
    left: 0,
    right: 0,
    bottom: 0,
    // borderColor:"white",
    // borderTopWidth:1
  },
  bgHeader: {
    backgroundColor: '#2fc7ae',
    height: 50,
    flexDirection: 'row',
    elevation: 6,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gmtombol1: {
    // borderRadius:8,
    // borderColor:'#ccc',
    // alignItems:'center',
    // elevation:8,
    width: 30,
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  menubar1: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    // position: "absolute", height:60,left: 0, right: 0, bottom: 0
  },
  card: {
    width: full,
    // height:300,
    borderRadius: 6,
    borderColor: '#ccc',
    // alignItems:'center',
    // elevation:3,
    // alignSelf:'center',
    // justifyContent:"center",
    // flexDirection:"row",
    // marginLeft:5,
    // marginRight:5,
    marginTop: 10,
    borderBottomWidth: 2,
  },
  response: {
    paddingTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btResponse: {
    height: 35,
    width: 120,
    backgroundColor: '#2fc7ae',
    justifyContent: 'center',
    borderRadius: 120,
  },
  gambar: {
    height: 150,
    // alignItems:'center',
    // justifyContent:'center',
    width: full,
    paddingLeft: 10,
    paddingRight: 10,
    // alignSelf:'center',
    // flex:0.3,
  },
  deskripsi: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  judul: {},
  meta: {
    // marginLeft:5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    // backgroundColor:'red'
    // backgroundColor:'red'
  },
});

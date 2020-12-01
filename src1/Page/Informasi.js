import React from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  RefreshControl,
  Dimensions,
  TouchableNativeFeedback,
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
// import HomeScreen from "../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
import PropTypes from 'prop-types';
var full = Dimensions.get('window').width; //full width
// import Footer from "./footer/footer"
export default class Informasi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataApi: [],
      dataSource: [
        {
          judul: 'KARNAVAL',
          // caption: 'Desa Wisata Air',
          jammulai: '19:00:00',
          jamselesai: '23:00:00',
          tgl: '30-11-2021',
          tempat: 'Kecamatan Waru',
          kategori: 'Lainnya',
        },
        {
          judul: 'PKT/ NORMALISASI SALURAN AIR',
          // caption: 'Desa Wisata Air',
          jammulai: '07:30:00',
          jamselesai: '10:00:00',
          tgl: '29-10-2019',
          tempat: 'Lapangan Desa',
          kategori: 'Lainnya',
        },
        {
          judul: 'KIRAB BUDAYA',
          // caption: 'Desa Wisata Air',
          jammulai: '14:00:00',
          jamselesai: '17:00:00',
          tgl: ' 02-11-2019',
          tempat: 'Depan Balai Desa',
          kategori: 'Lainnya',
        },
        {
          judul: 'Jatilan Satrio Mudo',
          // caption: 'Desa Wisata Air',
          jammulai: '16:00:00',
          jamselesai: '00:00:00',
          tgl: ' 01-11-2019',
          tempat: 'Lapangan Desa',
          kategori: 'Lainnya',
        },
        {
          judul: 'KERJA BAKTI',
          // caption: 'Desa Wisata Air',
          jammulai: '00:00:00',
          jamselesai: '00:00:00',
          tgl: '30-11-0001',
          tempat: 'Setiap RT/RW',
          kategori: 'Lainnya',
        },
        {
          judul: 'BINTEK APLIKASI DESA CERDAS',
          // caption: 'Desa Wisata Air',
          jammulai: '00:00:00',
          jamselesai: '00:00:00',
          tgl: '29-10-2019',
          tempat: 'Kantor Kelurahan Tambakrejo',
          kategori: 'Lainnya',
        },
        {
          judul: 'BAKTI SOSIAL DONOR DARAH',
          caption: 'Desa Wisata Air',
          jammulai: '19:00:00',
          jamselesai: '23:00:00',
          tgl: '02-11-2019',
          tempat: 'Puskesmas Waru',
          kategori: 'Lainnya',
        },
      ],
    };
  }

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
  componentDidMount() {
    this.getInformasi();
  }
  _onRefresh() {
    this.setState({refreshing: true});
    this.getInformasi().then(() => {
      this.setState({refreshing: false});
    });
  }
  getInformasi = () => {
    const url =
      'http://pontolo-kwandang.istudios.id/web/admin/Api2/informasi?api_key=$2y$10$efC2m3JMqJaiCp32WsOR1e8.Io/lAqVnjWc57HVeletlCdliYd3wC';
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataApi: responseJson.informasi,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              PINTAR
            </Text>
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
              onPress={() => navigate('MenuUtama')}
              // active={props.navigationState.index === 0}
              // onPress={() => pr  ops.navigation.navigate("MenuUtama")}
              style={style.tabs1}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 15}}>
                Berita
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Informasi')}
              // active={props.navigationState.index === 1}
              // onPress={() => props.navigation.navigate("Info")}
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                paddingLeft: 30,
                paddingRight: 30,
                backgroundColor: '#26a590',
                borderRadius: 8,
              }}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 15}}>
                Informasi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Potensi')}
              // active={props.navigationState.index === 2}
              // onPress={() => props.navigation.navigate("Pesan")}
              style={style.tabs1}>
              <Text style={{color: 'white', fontSize: 15}}>Potensi</Text>
            </TouchableOpacity>
          </View>
          {/* Informasi */}
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
            data={this.state.dataSource}
            keyExtractor={(item) => item.judul}
            renderItem={({item}) => (
              <View style={style.informasi}>
                <View style={style.card}>
                  <View style={style.gambar}>
                    <View style={{height: 10, width: 90}} />
                    {item.kategori == 'ja' ? <Text>data</Text> : null}
                    {item.kategori == 'Lainnya' ? (
                      <Image
                        source={require('../ass3t/dp/icon-pesta-rakyat.png')}
                        style={{width: 70, height: 70}}
                      />
                    ) : null}
                  </View>
                  <View style={style.meta}>
                    <View style={style.judul}>
                      <TouchableOpacity
                        onPress={() => navigate('DetailWisata')}>
                        <Text style={{fontSize: 13, color: 'black'}}>
                          {item.judul}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={style.tempatJam}>
                      <Text style={style.txtDetail}>
                        {' '}
                        : {item.jammulai} - {item.jamselesai}
                      </Text>

                      <Text style={style.txtDetail}> : {item.tempat}</Text>
                    </View>
                    <View style={style.tgl}>
                      <Text style={style.txtDetail}> : {item.tgl}</Text>
                    </View>
                  </View>
                </View>
                <View style={{height: 10}} />
              </View>
            )}
          />
          <View style={{height: 90}} />
        </ScrollView>

        <View style={{flex: 1}}>
          <View style={style.menubar}>
            <TouchableOpacity
              onPress={() => navigate('MenuUtama')}
              // active={props.navigationState.index === 0}
              // onPress={() => pr  ops.navigation.navigate("MenuUtama")}
              style={style.menubar1}>
              <Image
                source={require('../ass3t/dp/icon-home-a.png')}
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
                source={require('../ass3t/dp/icon-layanan.png')}
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
                source={require('../ass3t/dp/icon-map.png')}
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
                source={require('../ass3t/dp/icon-laporan.png')}
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
                source={require('../ass3t/dp/icon-user.png')}
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
  tabs: {
    height: 45,
    backgroundColor: '#2fc7ae',
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabs1: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    // position: "absolute", height:60,left: 0, right: 0, bottom: 0
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
  container: {
    flex: 1,
    // backgroundColor:'orange'
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
    height: 105,
    borderRadius: 6,
    borderColor: '#ccc',
    // alignItems:'center',
    elevation: 3,
    // alignSelf:'center',
    // justifyContent:"center",
    flexDirection: 'row',
    // marginLeft:5,
    // marginRight:5,
    backgroundColor: 'white',
    marginTop: 10,
  },

  gambar: {
    height: 150,
    // alignItems:'center',
    // justifyContent:'center',
    // width:150,
    paddingLeft: 10,
    // alignSelf:'center',
    // flex:0.3,
  },
  tempatJam: {
    borderTopWidth: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  txtDetail: {
    fontSize: 10,
    paddingTop: 5,
  },
  tgl: {
    paddingTop: 5,
    paddingRight: 5,
  },
  judul: {
    //   alignItems:'center'
    paddingTop: 5,
  },
  meta: {
    marginLeft: 5,
    //   backgroundColor:'green',
    width: '70%',
    marginRight: 10,
  },
});

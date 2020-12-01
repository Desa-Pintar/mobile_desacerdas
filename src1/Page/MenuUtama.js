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
  Modal,
  Linking,
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
import HTML from 'react-native-render-html';
// import HomeScreen from "../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
import PropTypes from 'prop-types';
var full = Dimensions.get('window').width; //full width
// import Footer from "./footer/footer"
export default class MenuUtama extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataApi: [],
      modalVisible: false,
      refreshing: false,
      slug: '',
      konten: '',
      dataSource: [
        {
          title: 'INGIN CEPAT KAYA DENGAN MUDAH? PAHAMI DULU ARTI KAYA YANG SESUNGGUHNYA',
          caption: 'Prestasi Desa',
          url:
            'http://tambakrejo-waru.istudios.id/web/desacerdas/uploads/gambar/artikel/Ingin_Cepat_Kaya_dengan_Mudah_Pahami_Dulu_Arti_Kaya_yang_Sesungguhnya20201115100950.jpg',
          link:
            'http://tambakrejo-waru.istudios.id/web/berita/detail/15-11-2020-ingin-cepat-kaya-dengan-mudah-pahami-dulu-arti-kaya-yang-sesungguhnya',
        },
        {
          title: 'Sore yang Indah di Pantai Tambak Rejo Blitar',
          caption: 'Prestasi Desa',
          url: 'https://akcdn.detik.net.id/customthumb/2020/08/02/1026/img_20200802121121_5f264af969080.jpg?w=600&q=90',
          link:
            'https://travel.detik.com/dtravelers_photos/u-5117180/sore-yang-indah-di-pantai-tambak-rejo-blitar/2/#detail__photo',
        },
        {
          title: 'HADAPI POTENSI TSUNAMI',
          caption: 'Himbauan',

          url:
            'https://risetcdn.jatimtimes.com/images/2020/10/07/Pjs-Bupati-Blitar-Budi-Santosa-memberikan-sambutan-dan-paparan-dalam-sosialisasi-menghadapi-ancaman-bencana-gempa-bumi-dan-tsunami-di-Desa-Tambakrejo.Foto--Malik-NaharulBlitarTIMES77bedb94829b7b22.md.jpg',
          link:
            'http://tambakrejo-waru.istudios.id/web/berita/detail/30-11-2020-hadapi-potensi-tsunami',
        },
        {
          title: 'BANGKITKAN EKONOMI WARGA SIDOARJO, PEMKAB BANGUN DUA JEMBATAN BARU',
          caption: 'Prestasi Desa',

          url:
            'http://tambakrejo-waru.istudios.id/web/desacerdas/uploads/gambar/artikel/Bangkitkan_Ekonomi_Warga_Sidoarjo,_Pemkab_Bangun_Dua_Jembatan_Baru20201130071828.png',
          link:
            'http://tambakrejo-waru.istudios.id/web/berita/detail/30-11-2020-bangkitkan-ekonomi-warga-sidoarjo-pemkab-bangun-dua-jembatan-baru',
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
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
    console.log('mulai');
    // const url =
    // 'http://pontolo-kwandang.istudios.id/web/Api2/artikel?api_key=$2y$10$efC2m3JMqJaiCp32WsOR1e8.Io/lAqVnjWc57HVeletlCdliYd3wC';
    const url =
      'http://pontolo-kwandang.istudios.id/web/admin/Api2/artikel?api_key=$2y$10$efC2m3JMqJaiCp32WsOR1e8.Io/lAqVnjWc57HVeletlCdliYd3wC';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataApi: responseJson.artikel,
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
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <ScrollView>
            <View style={style.bgHeader}>
              <Text style={{color: 'white', fontSize: 20}}>Desa</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                PINTAR
              </Text>
            </View>
            <Image source={{uri: this.state.gambar}} style={{height: 150}} />
            <Text
              style={{
                fontWeight: 'bold',
                paddingTop: 10,
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              {this.state.judul}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 35,
                  width: 120,
                  backgroundColor: '#2fc7ae',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: 7,
                  borderRadius: 150,
                }}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {this.state.namaKategori}
                </Text>
              </View>
              <Text style={{paddingLeft: 30, fontSize: 12, color: 'grey'}}>
                {this.state.tanggal}
              </Text>
            </View>
            <View style={{paddingTop: 10, paddingLeft: 5, paddingRight: 5}}>
              <HTML html={this.state.konten} />
            </View>
          </ScrollView>
        </Modal>
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
            onPositionChanged={(position) => this.setState({position})}
            style={{height: 10}}
          /> */}

          <View style={style.tabs}>
            <TouchableOpacity
              onPress={() => navigate('MenuUtama')}
              // active={props.navigationState.index === 0}
              // onPress={() => pr  ops.navigation.navigate("MenuUtama")}
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
                Berita
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Informasi')}
              // active={props.navigationState.index === 1}
              // onPress={() => props.navigation.navigate("Info")}
              style={style.tabs1}>
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
            // refreshControl={
            //   <RefreshControl
            //     refreshing={this.state.refreshing}
            //     onRefresh={this._onRefresh.bind(this)}
            //   />
            // }
            data={this.state.dataSource}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View style={style.berita}>
                <View style={style.card}>
                  <View style={style.gambar}>
                    <Image
                      source={{uri: item.url}}
                      style={{height: 90, width: 90}}
                    />
                  </View>
                  <View style={style.meta}>
                    <View style={style.judul}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(item.link)}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: 'black',
                            paddingRight: 10,
                            paddingTop: 10,
                          }}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={style.deskripsi}>
                      <Text
                        style={{
                          fontSize: 10,
                          paddingTop: 10,
                          color: 'green',
                          fontSize: 10,
                        }}>
                        {' '}['']
                        {item.caption}
                      </Text>
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

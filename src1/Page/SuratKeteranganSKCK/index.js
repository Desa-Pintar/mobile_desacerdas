import React from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Modal,
  ToastAndroid,
  ActivityIndicator,
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
export default class SuratKeteranganSKCK extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nik: '7174021511140001',
      nama: 'Etran Didipu',
      ttl: 'Kotambagu,0000-00-00',
      jk: 'Laki-laki',
      agama: 'Islam',
      statusPerkawinan: 'Kawin',
      pekerjaan: 'Montir',
      alamat: 'Kilometer 1 RT:0 RW:0',
      Kewarganegaraan: 'Indonesia',
      default: 'pengajuan',
      loading: false,
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'SISTEM INFORMASI PELAYANAN PUBLIK',
          url:
            'http://desa.proitdev.com/uploads/gambar/thumbnail/Smart_Government20171124131109.jpg',
        },
      ],
    };
  }
  saveData = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
      ToastAndroid.show(
        'Data tersimpan',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }, 3000);
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <Modal
          visible={this.state.loading}
          transparent={true}
          onRequestClose={() => {
            ToastAndroid.show(
              'Tunggu proses selesai',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }}
          animationType="slide">
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                elevation: 5,
                borderRadius: 5,
              }}>
              <ActivityIndicator size="large" color="#2fc7ae" />
              <Text style={{color: 'grey'}}> Loading</Text>
            </View>
          </View>
        </Modal>
        <ScrollView style={{flex: 1, padding: 10}}>
          <Text style={{fontWeight: 'bold'}}>Isilah form di bawah ini</Text>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Nama</Text>
            <TextInput
              value={this.state.nama}
              onChangeText={(teks) => this.setState({nama: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>

          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Tempat Tanggal Lahir</Text>
            <TextInput
              value={this.state.ttl}
              onChangeText={(teks) => this.setState({ttl: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Jenis Kelamin</Text>
            <TextInput
              value={this.state.jk}
              onChangeText={(teks) => this.setState({jk: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Kewarganegaraan</Text>
            <TextInput
              value={this.state.Kewarganegaraan}
              onChangeText={(teks) => this.setState({Kewarganegaraan: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Agama</Text>
            <TextInput
              value={this.state.agama}
              onChangeText={(teks) => this.setState({agama: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Status Perkawinan</Text>
            <TextInput
              value={this.state.statusPerkawinan}
              onChangeText={(teks) => this.setState({statusPerkawinan: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Pekerjaan</Text>
            <TextInput
              value={this.state.pekerjaan}
              onChangeText={(teks) => this.setState({pekerjaan: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Pendidikan</Text>
            <TextInput
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Nomor KK</Text>
            <TextInput
              value={this.state.nik}
              onChangeText={(teks) => this.setState({nik: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Alamat </Text>
            <TextInput
              value={this.state.alamat}
              onChangeText={(teks) => this.setState({alamat: teks})}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Keterangan</Text>
            <TextInput
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text style={{marginBottom: 3}}>Surat ini digunakan untuk</Text>
            <TextInput
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              marginBottom: 30,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Layanan')}
              style={{
                height: 40,
                width: '40%',
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                margin: 10,
              }}>
              <Text style={{color: 'white'}}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.saveData()}
              style={{
                height: 40,
                width: '40%',
                backgroundColor: '#2fc7ae',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                margin: 10,
              }}>
              <Text style={{color: 'white'}}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{height: 50, width: '100%'}}>
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
                source={require('../../ass3t/dp/icon-laporan.png')}
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
                source={require('../../ass3t/dp/icon-user-a.png')}
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
  headerProfile: {
    height: 120,
    backgroundColor: '#2fc7ae',
    flexDirection: 'row',
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
    width: '100%',
    height: 100,
    borderRadius: 6,
    borderColor: '#ccc',
    // alignItems:'center',
    elevation: 3,
    // alignSelf:'center',
    // justifyContent:"center",
    flexDirection: 'row',
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
    marginTop: 20,
    //   borderTopWidth:0.5
  },
  judul: {
    width: '100%',
    paddingTop: 1,
    // paddingRight:4
    // margin:30
  },
  meta: {
    marginLeft: 5,
    marginRight: 30,
    // backgroundColor:'red'
  },
  acordionHead: {
    alignItems: 'center',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 184, 150)',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  acordionHeadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  acordionBodyContainer: {
    padding: 10,
  },
  acordionBody: {
    marginBottom: 10,
  },
  acordionBodyText: {
    fontWeight: 'bold',
  },
});

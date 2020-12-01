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
import {AccordionList} from 'accordion-collapse-react-native';
import {List} from '../../data/List';

// import HomeScreen from "../../HomeScreen";
// import { StackNavigator } from "react-navigation";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Slideshow from "react-native-slideshow";
// import PropTypes from "prop-types";

var full = Dimensions.get('window').width; //full width
// import Footer from "./footer/footer"
export default class LayananKependudukan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      default: 'pengajuan',
      dataPengajuan: [
        {
          title: 'Surat Keterangan Domisili',
          navigation: 'Surat Keterangan Domisili',
        },
        {
          title: 'Surat Keterangan SKCK',
          navigation: 'Surat Keterangan SKCK',
        },
        {
          title: 'Surat Keterangan Kelahiran',
          navigation: 'Surat Keterangan Kelahiran',
        },
        {
          title: 'Akta Kelahiran',
          navigation: 'AktaKelahiran',
        },
        
      ],
      list: List,
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
  _head(item) {
    return (
      <View style={style.acordionHead}>
        <Text style={style.acordionHeadText}>{item.title}</Text>
      </View>
    );
  }

  _body(item) {
    return (
      <View style={style.acordionBodyContainer}>
        {item.body.map((value, key) => {
          return (
            <View key={key} style={style.acordionBody}>
              <Text style={style.acordionBodyText}>{value.subjudul}</Text>
              <Text>{value.isi}</Text>
            </View>
          );
        })}
      </View>
    );
  }
  animateTab = () => {
    if (this.state.default === 'pengajuan') {
      return (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}>
          <TouchableOpacity
            onPress={() => this.setState({default: 'pengajuan'})}
            style={{
              height: 40,
              width: '30%',
              margin: 10,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2fc7ae',
                borderRadius: 5,
              }}>
              <Text style={{color: 'white'}}>Pengajuan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Persyaratan')}
            style={{
              height: 40,
              width: '30%',
              margin: 10,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
                borderRadius: 5,
              }}>
              <Text>Persyaratan</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.default === 'persyaratan') {
      return (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}>
          <TouchableOpacity
            onPress={() => this.setState({default: 'pengajuan'})}
            style={{
              height: 40,
              width: '30%',
              margin: 10,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
                borderRadius: 5,
              }}>
              <Text style={{color: 'white'}}>Pengajuan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Persyaratan')}
            style={{
              height: 40,
              width: '30%',
              margin: 10,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2fc7ae',
                borderRadius: 5,
              }}>
              <Text>Persyaratan</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };
  renderTab = () => {
    if (this.state.default == 'pengajuan') {
      return this.state.dataPengajuan.map((value, key) => {
        return (
          <View
            key={key}
            style={{
              height: 40,
              width: '100%',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderColor: 'grey',
              padding: 10,
            }}>
            <Text
              onPress={() => this.props.navigation.navigate(value.navigation)}>
              {value.title}
            </Text>
          </View>
        );
      });
    } else {
      return false;
    }
  };
  renderListAcordion = () => {
    if (this.state.default == 'persyaratan') {
      return (
        <AccordionList
          list={this.state.list}
          header={this._head}
          body={this._body}
          keyExtractor={(item) => `${item.id}`}
        />
      );
    }
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

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        {/* <View style={style.bgHeader}>
          <Text style={{color: 'white', fontSize: 20}}>Desa</Text>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            PINTAR
          </Text>
        </View> */}
        {/* KONTEN MULAI */}
        <ScrollView style={{flex: 1}}>
          {this.animateTab()}
          {this.renderTab()}
        </ScrollView>
        {this.renderListAcordion()}
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

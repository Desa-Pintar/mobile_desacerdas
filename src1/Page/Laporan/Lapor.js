import React, { Component } from 'react';
import { Dimensions,Keyboard, ScrollView,Modal, Alert,View,TextInput, TouchableOpacity,StyleSheet,Image } from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Form,
  Item,
  Label,
  Input,
  InputGroup,
  Left,
  Right,
  Text,
  Textarea,
  Icon
} from 'native-base';

var full = Dimensions.get('window').width; //full width
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Lapor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gambar:this.props.navigation.state.params.path,
      modalVisible: false,
      // namLap:'',
      // desLap:'',
      // pilihan:''
    };  
  }
  submit() {
    
    const data = new FormData();
    photo = this.state.gambar
    data.append('judul', this.state.namLap);
    data.append('laporan', this.state.desLap);
    data.append('idKategori', this.state.pilihan);
    data.append('foto', {
      uri: this.state.gambar,
      type: 'image/jpg', 
    name: this.state.curTime+'.jpg',
    });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://desa.proitdev.com/Api2/kirim_laporan?api_key=$2y$10$efC2m3JMqJaiCp32WsOR1e8.Io/lAqVnjWc57HVeletlCdliYd3wC');
    xhr.send(data);
      Alert.alert('Data Berhasil Dikirim', 'Laporan telah ditambahkan')
      // this.props.navigation.navigate("Laporan")
      Keyboard.dismiss();
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);

          }}>
          <View style={style.bgHeader}>
          <Text style={{color:'white', fontSize:20}}>Pilih Tag</Text>
        </View>
        <ScrollView>
            <View style={style.kategori}>
              <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 1,modalVisible: false,})}>
                 <Image
                      source={require("../../ass3t/dp/icon-sinitasi.png")}
                      style={{height:80, width:80, }}
                  />
                  <Text style={{paddingTop:10, fontWeight:'bold'}}>Sanitasi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 2,modalVisible: false,})}>
                <Image
                      source={require("../../ass3t/dp/tag-pungli.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Pungli</Text>
              </TouchableOpacity>
            </View>
            <View style={style.kategori1}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 3,modalVisible: false,})}>
                 <Image
                      source={require("../../ass3t/dp/tag-fas-publik.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Fasilitas Publik</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 6,modalVisible: false,})}>
                <Image
                      source={require("../../ass3t/dp/tag-sosial.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Masalah Sosial</Text>
              </TouchableOpacity>
            </View>
            <View style={style.kategori1}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 4,modalVisible: false,})}>
                 <Image
                      source={require("../../ass3t/dp/tag-kecelakaan.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Kecelakaan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 5,modalVisible: false,})}>
                <Image
                      source={require("../../ass3t/dp/tag-musibag.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Musibah</Text>
              </TouchableOpacity>
            </View>
            <View style={style.kategori1}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 8,modalVisible: false,})}>
                 <Image
                      source={require("../../ass3t/dp/tag-sawah.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Sawah</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.setState({ pilihan: 9,modalVisible: false,})}>
                <Image
                      source={require("../../ass3t/dp/tag-lainnya.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Lain Lain</Text>
              </TouchableOpacity>
              </View>
              <View style={{height:30, backgroundColor:'#f3f3f3'}}/>
            </ScrollView>
        </Modal>
        <View style={style.bgHeader}>
        <Left><TouchableOpacity  onPress={() => navigate("Laporan")} ><Icon name='ios-arrow-back'/></TouchableOpacity></Left>
          <Text style={{color:'white', fontSize:20}}>Desa</Text><Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>PINTAR</Text>
        <Right/>
        </View>
        {/* KONTEN MULAI */}
        <ScrollView>
            <View style={{}}>
            <Image source={{uri: this.state.gambar}} style={{height:300, width:'100%'}}/>
                
            </View>

            <Grid >
                
                <Col style={{height:300, width:'40%', alignItems:"center", alignItems:"center"}}>
                <TouchableOpacity
        // useForeground
        // onPress={() => Linking.openURL(url)}
        onPress={() => {
          this.setModalVisible(true);
        }}
      >
                  <Text style={{paddingTop:15}}> Pilih Tag Laporan </Text>
                  </TouchableOpacity>
                  {this.state.pilihan == 1? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
                  <Image
                       source={require("../../ass3t/dp/icon-sinitasi.png")}
                       style={{height:80, width:80,  }}
                   />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Sanitasi</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 2? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
                  <Image
                      source={require("../../ass3t/dp/tag-pungli.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Pungli</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 3? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
                  <Image
                      source={require("../../ass3t/dp/tag-fas-publik.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Fasilitas Publik</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 4? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
   <Image
                      source={require("../../ass3t/dp/tag-sosial.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Masalah Sosial</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 5? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
   <Image
                      source={require("../../ass3t/dp/tag-kecelakaan.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Kecelakaan</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 6? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
   <Image
                      source={require("../../ass3t/dp/tag-musibag.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Musibah</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 7? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
   <Image
                      source={require("../../ass3t/dp/tag-sawah.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Sawah</Text>
               </TouchableOpacity>
                    : null }
                    {this.state.pilihan == 8? 
                  <TouchableOpacity style={{alignItems:'center',paddingTop:60}} onPress={() => this.setState({ modalVisible: true,})}>
   <Image
                      source={require("../../ass3t/dp/tag-lainnya.png")}
                      style={{height:80, width:80, }}
                  />
                   <Text style={{paddingTop:10, fontWeight:'bold'}}>Lain Lain</Text>
               </TouchableOpacity>
                    : null }
                </Col>
                <Col> 
                <Form>
                  <Text style={{paddingLeft:10, paddingTop:15}}>Nama Laporan :</Text>
            <Textarea rowSpan={5}  placeholder="Nama Laporan"  onChangeText={namLap => this.setState({namLap})}/>
            <Text style={{paddingLeft:10}}>Deskripsi Laporan : </Text>
            <Textarea rowSpan={5}  placeholder="Deskripsi Laporan"onChangeText={desLap => this.setState({desLap})} />
            
          </Form>
                </Col>
            </Grid>
        <View style={{height:90}}/>
        </ScrollView>
        <View style={{ flex: 1 }}>
        <TouchableOpacity
            onPress={()=>this.submit()}
            // active={props.navigationState.index === 3}
            // onPress={() => props.navigation.navigate("Akun")}
            style={style.menubar}
          >
          {/* <View style={style.menubar}> */}
            <Text style={{ color: "white", fontSize: 18 }}>Tambahkan Laporan</Text>
        {/* </View> */}
        </TouchableOpacity>
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
        kategori:{
          flexDirection: "row",
          paddingLeft:40,
          paddingRight:40,
          paddingTop:30,
          justifyContent:'space-between',
          backgroundColor:'#f3f3f3'
        },
        kategori1:{
          flexDirection: "row",
          paddingLeft:40,
          paddingRight:40,
          paddingTop:20,
          justifyContent:'space-between',
          backgroundColor:'#f3f3f3'
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
        //   flexDirection: "row",
          justifyContent: "center",
          alignItems:"center",
          backgroundColor: "#e8697c",
          paddingLeft: 30,
          paddingRight: 30,
          height: 60,
          position: "absolute", 
          height:60,
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

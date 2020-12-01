import React, { Component } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import MenuUtama from "./MenuUtama.js";
import Informasi from "./Informasi";
import Potensi from "./Potensi";
import login from "./login";
import Akun from "./Akun/Akun";
import Layanan from "./Layanan/Layanan";
import LayananKependudukan from "./Layanan/LayananKependudukan";
import detaillayanan from "./Layanan/detaillayanan";
import Laporan from "./Laporan/Laporan";
import Kamera from "./Laporan/Kamera";
import lapor from "./Laporan/Lapor";
import Map from "./Map/Map"
import { TabNavigator, StackNavigator } from "react-navigation";
import {
  Label
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
// export default (MainScreenNavigator = TabNavigator(
export default (MainScreenNavigator = StackNavigator(
  {
    login: { screen: login },
    MenuUtama: { screen: MenuUtama },
    Potensi: { screen: Potensi },
    Map: { screen: Map },
    Informasi: { screen: Informasi },
    Laporan: { screen: Laporan },
    Kamera: { screen: Kamera },
    Lapor: { screen: lapor },
    Layanan: { screen: Layanan },
    // Layanan: {screen:LayananKependudukan},
    detaillayanan: { screen: detaillayanan },
    Akun: { screen: Akun },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <View>
        </View>
      );
    }
  },
));
const style = StyleSheet.create({
  bgHeader: {
    backgroundColor: '#2E2E2E',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 6,
    borderColor: "white"
  },
  menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#2E2E2E",
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    marginTop: 50
    // borderColor:"white",
    // borderTopWidth:1
  },
  menubar1: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "center"
  },
  kontainerBaris1: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  kontainerBaris2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  kontainerBaris3: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  gmtombol1: {
    // borderRadius:8,
    // borderColor:'#ccc',
    // alignItems:'center',
    // elevation:8,
    width: 25,
    height: 25,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: 30
  },
  tombol1: {
    borderRadius: 6,
    borderColor: '#ccc',
    alignItems: 'center',
    elevation: 3,
    width: 80,
    alignSelf: 'center',
    justifyContent: "center",
  },
  containertb1: {
    paddingLeft: 9,
    paddingRight: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

  },
  tombolbr1: {
    width: 50,
    height: 80,
    alignItems: 'center',
    elevation: 3,
    backgroundColor: "#FAFAFA"
  },
  gambartb1: {
    width: 40,
    height: 40,

  },

  TigaTombol: {
    flex: 1,
    flexDirection: 'row',

    paddingTop: 190,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

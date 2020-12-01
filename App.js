import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import login from './src1/Page/login';
import MenuUtama from './src1/Page/MenuUtama';
import Informasi from './src1/Page/Informasi';
import Potensi from './src1/Page/Potensi';
import Akun from './src1/Page/Akun/Akun';
// import Layanan from "./src1/Page/Layanan/Layanan";
import LayananKependudukan from './src1/Page/Layanan/LayananKependudukan';
import detaillayanan from './src1/Page/Layanan/detaillayanan';
import Laporan from './src1/Page/Laporan/Laporan';
// import Kamera from "./src1/Page/Laporan/Kamera";
import lapor from './src1/Page/Laporan/Lapor';
import Map from './src1/Page/Map/Map';
import Persyaratan from './src1/Page/Persyaratan/Persyaratan';
import SuratKeteranganDomisili from './src1/Page/SuratKeteranganDomisili';
import SuratKeteranganSKCK from './src1/Page/SuratKeteranganSKCK';
import SuratKeteranganKelahiran from './src1/Page/SuratKetranganKelahiran';
import DataIbu from './src1/Page/DataIbu';
import DataAyah from './src1/Page/DataAyah';
import DataPelapor from './src1/Page/DataPelapor';
import DataSaksi from './src1/Page/DataSaksi';
import DataKuasaAkta from './src1/Page/DataKuasaAkta';
import DataKuasaKIA from './src1/Page/DataKuasaKIA';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="MenuUtama">
        <Drawer.Screen name="Login" component={login} />
        <Drawer.Screen name="MenuUtama" component={MenuUtama} />
        <Drawer.Screen name="Informasi" component={Informasi} />
        <Drawer.Screen name="Potensi" component={Potensi} />
        <Drawer.Screen name="Akun" component={Akun} />
        <Drawer.Screen name="LayananKependudukan" component={LayananKependudukan} />
        <Drawer.Screen name="detaillayanan" component={detaillayanan} />
        <Drawer.Screen name="Laporan" component={Laporan} /> */}
      {/* <Drawer.Screen name="Kamera" component={Kamera} /> */}
      {/* <Drawer.Screen name="lapor" component={lapor} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="MenuUtama" component={MenuUtama} />
        <Stack.Screen name="Informasi" component={Informasi} />
        <Stack.Screen name="Potensi" component={Potensi} />
        <Stack.Screen name="Akun" component={Akun} />
        {/* <Stack.Screen name="Layanan" component={Layanan} /> */}
        <Stack.Screen name="Layanan" component={LayananKependudukan} />
        <Stack.Screen name="detaillayanan" component={detaillayanan} />
        <Stack.Screen name="Laporan" component={Laporan} />
        <Stack.Screen name="lapor" component={lapor} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Persyaratan" component={Persyaratan} />
        <Stack.Screen
          name="Surat Keterangan Domisili"
          component={SuratKeteranganDomisili}
        />
        <Stack.Screen
          name="Surat Keterangan SKCK"
          component={SuratKeteranganSKCK}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="Surat Keterangan Kelahiran"
          component={SuratKeteranganKelahiran}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="DataIbu"
          component={DataIbu}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="DataAyah"
          component={DataAyah}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="DataPelapor"
          component={DataPelapor}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="DataSaksi"
          component={DataSaksi}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="DataKuasaAkta"
          component={DataKuasaAkta}
        />
        <Stack.Screen
          options={{title: 'Surat Keterangan Kelahiran'}}
          name="DataKuasaKIA"
          component={DataKuasaKIA}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

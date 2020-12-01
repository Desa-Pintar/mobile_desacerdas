import React from "react";
import { AppRegistry, View, StatusBar, Image,Dimensions,TouchableHighlight, StyleSheet, TouchableOpacity, TextInput, ScrollView} from "react-native";
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
  Footer,
  FooterTab,
  Label
} from "native-base";
import HomeScreen from "../../HomeScreen";
import { Col, Row, Grid } from 'react-native-easy-grid';
// Snip
import { RNCamera as Camera } from 'react-native-camera';
// import Camera from 'react-native-camera';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
  confirm: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }
});

export default class TakePictureScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path: null,
      gambar:''
    };
  }

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync({forceUpOrientation: true, fixOrientation: true});
      this.setState({ path: data.uri });
      // this.props.updateImage(data.uri);
      // console.log('Path to image: ' + data.uri);
      RNFS.unlink(data.uri);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        flashMode={Camera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (
      <View>
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>
        <Text
          style={styles.confirm}
          onPress={() => {
            this.props.navigation.navigate("Lapor", { path: this.state.path });
            // alert(this.state.path)
          }}
        >Lanjutkan
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

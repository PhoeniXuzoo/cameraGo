import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


export default class App extends React.Component {
  state = {
    hasPermission: null,
    type: Camera.Constants.Type.back,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  render() {
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    }
    else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}>
              
            </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

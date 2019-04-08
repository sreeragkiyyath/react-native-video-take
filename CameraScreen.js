import React, { Component } from 'react';
    import {
      Platform,
      StyleSheet,
      Text,
      View,
      AppRegistry,
      TouchableHighlight,Button
    } from 'react-native';

    import Camera from 'react-native-camera'


    export default class CameraScreen extends React.Component{
      constructor() {
      super();
     // this.render = this.render.bind(this)
      //this.state = { cameraType: Camera.constants.Type.back }
    }
    
      render() {
    
    return (
      <View style={styles.recorder}>
        <Camera
        ref = "camera"
        /*
        ref={(cam) => {
          this.camera = cam;
        }}
          //style={styles.preview}*/
          aspect={Camera.constants.Aspect.fill}
        //  type={this.state.cameraType}
          captureMode={Camera.constants.CaptureMode.video}
          //captureAudio={false}
          keepAwake={true}

          target={Camera.constants.CaptureTarget.disk}>
    
          <Button
          color = '#000000'
          title ="Start"
            onPress={this.takeVideo}/>          
          <Button
          title ="stop"
            
            onPress={this.stopVideo}/>

        </Camera>
      </View>
    );
     }
    
    onPressIn = () => {
      recordVideo = setTimeout(this.takeVideo, 5000);
    }
    takeVideo = () =>{
      console.log('fn called ---------------')
      this.refs.camera.capture({
       // audio: true,
        mode: Camera.constants.CaptureMode.video,
      target: Camera.constants.CaptureTarget.disk
      }).then((data) => {
          console.log('data---------------')
          console.log(data);
        }).catch((err) => console.log(err + 'error \n'));
    }
  
  stopVideo() {
    this.refs.camera.stopCapture();
  }
  
  }
/*    export default class CameraScreen extends React.Component {
        constructor() {
            super()
            this.state = {
              captureMode: Camera.constants.CaptureMode.video,
            }
          } 

      render() {
        return (
      <View style={styles.recorder}>

         <Camera 

          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          //type = {Camera.constants.Type.front}
          captureMode = {Camera.constants.CaptureMode.video}

          keepAwake={true}
          >


          <Text style={styles.welcome} onPress={this.takeVid.bind(this)}> Start recording </Text>
          <Text style={styles.welcome} onPress={this.stopVid.bind(this)}> Stop recording </Text>
        </Camera>
      </View>
    );
  }

  takeVideo() {
    this.refs.camera.capture({
      audio: true,
      mode: Camera.constants.CaptureMode.video,
      target: Camera.constants.CaptureTarget.disk
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

stopVideo() {
  this.refs.camera.stopCapture();
}

  takeVid = () => {
      console.log('Taking video------------------------------------')
    if (this.camera) {
        this.camera.capture({mode: Camera.constants.CaptureMode.video})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
        
      }else{
        console.log('\n Camera not working------------------------------------')

      }
    }

  stopVid(){
   //console.log("I am pressed");
    this.camera.stopCapture();
  }
}
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    recorder: {
    height:300,
    width:300

    },
  });
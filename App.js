import * as React from 'react';
import { NodeCameraView } from 'react-native-nodemediaclient';
import {
  StyleSheet,
  Text,
  SafeAreaView
} from "react-native";

const styles = StyleSheet.create({
  nodeCameraView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
});

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>
          test
        </Text>
        <NodeCameraView
          style={styles.nodeCameraView}
          ref={(vb) => { this.vb = vb }}
          outputUrl={"rtmp://live.mux.com/app/febee03d-5249-f1f7-6cbf-4efc4c4e4d8d"}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
          autopreview={true}
        />
      </SafeAreaView>
    )
  }
}

export default Test;

/*

        <NodeCameraView
          style={styles.nodeCameraView}
          ref={(vb) => { this.vb = vb }}
          outputUrl={"rtmp://live.mux.com/app/6e28dace-20ad-0571-9591-903e1aeb5460"}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
          autopreview={true}
        />
*/
# testMuxProject

## Steps to generate Mux live stream key:
1. Generate API access token
2. Create new live stream
3. Run POST request
4. Copy/paste stream key into React App 

### Current problems:
We are able to compile and run this test app in an iPhone simulator. However, our Mux stream on our dashboard remains "Idle" instead of "Active" when we run the app in the simulator. To our understanding, we should be seeing an Active live stream feed from our simulator on our Mux dashboard (but not on our simulator yet since we have not yet implemented a video view component). 

External libraries used: https://github.com/NodeMedia/react-native-nodemediaclient

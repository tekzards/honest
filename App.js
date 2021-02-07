import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing'
import SignupScreen from './components/auth/Signup'
import SigninScreen from './components/auth/Signin'
import MainScreen from './components/Main'
import AddScreen from './components/main/Add'
import HomeScreen from "./components/main/Home"
import RestaurantScreen from "./components/main/Restaurant"
// import SaveScreen from './components/main/Save'
// import CameraScreen from './components/main/Camera'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const store = createStore(rootReducer, applyMiddleware(thunk))
const firebaseConfig = {
  apiKey: "AIzaSyDpsBChU4xOkKWf74f0-bO-1HefjO5QF-A",
  authDomain: "honest-dev.firebaseapp.com",
  databaseURL: "https://honest-dev.firebaseio.com",
  projectId: "honest-dev",
  storageBucket: "honest-dev.appspot.com",
  messagingSenderId: "414676647660",
  appId: "1:414676647660:web:f885fd0cb9ad290969afc9",
  measurementId: "G-5L19GNB44D"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
<<<<<<< HEAD
        <View style={{ flex: 1, justifyContent: 'center', display: "flex", alignItems: "center" }}>
          <Text><CircularProgress /></Text>
=======
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
>>>>>>> cf655e0c3e810776603fb322fe5d6c8bed233b52
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={AddScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Camera" component={CameraScreen} navigation={this.props.navigation} />
            <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} /> */}
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App

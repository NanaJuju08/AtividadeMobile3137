/* import {Profile} from "./components/Profile";
import Teste from "./components/Teste"; */

import Login from "./screens/login";
import Home from "./screens/home";
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
{/*       <Home/> */}
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
})


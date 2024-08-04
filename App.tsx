import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'Redux/store';
import Router from 'Routes/Router'

const App = () =>{
  console.log(store)
 return(
  <SafeAreaView style={styles.container}>
    <Provider store={store}>
    <Router />
    </Provider>
  </SafeAreaView>

 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;

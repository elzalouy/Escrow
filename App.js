import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';


import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/Entypo';

//Stacks
import Main from './src/components';
Icon.loadFont();
Icon1.loadFont();
Icon2.loadFont();
Icon3.loadFont();
Icon4.loadFont();


const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};
export default App;
// import libraries
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

// create app component
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="TechStack" />
      </View>
    </Provider>
  );
};

// export
export default App;

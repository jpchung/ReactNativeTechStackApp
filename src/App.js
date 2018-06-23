// import libraries
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

// create app component
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="TechStack" />
      </View>
    </Provider>
  );
};

// export
export default App;

//include library
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//create component (functional)
//if size not specified from parent, default spinner size is large
const Spinner = ({ size }) => (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );


const styles = {
  spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
};
//export to other app components
export { Spinner };

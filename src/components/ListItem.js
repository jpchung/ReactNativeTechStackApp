// import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

// create component (class)
// is passed library as prop from LibraryList
class ListItem extends Component {

  //lifecycle method, runs before render
  componentWillMount() {

  }
  //render component to screen
  render() {
    //destructured props
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//export to other components in app
export default ListItem;

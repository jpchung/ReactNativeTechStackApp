// import libraries
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//create component (class)
class LibraryList extends Component {

  //lifecycle method, runs before render
  componentWillMount() {
    //ListView (scalable component for rendering scrolling list)
    //if item goes beyond screen, its component reused for next item in list
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //set libraries prop (via mapStateToProps) of component as listView data source
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  //helper method for rendering single library per row
  renderRow(library) {
    return <ListItem library={library} />;
  }

  //render component to screen
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// take global app state (including reducers) and provide as props of component
const mapStateToProps = state => {
  return { libaries: state.libaries };
};

//export to other components in app
//connect, retrieve state from redux store, then export as props of component
export default connect(mapStateToProps)(LibraryList);

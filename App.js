import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bold} from 'colorette';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.morning}>
          <Text>Good Morning</Text>
        </View>
        <View style={styles.evening}>
          <Text>Good Evening</Text>
        </View>
        <View style={styles.night}>
          <Text>Good Night</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
  },
  morning: {
    flex: 1,
    fontSize: 18,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  evening: {
    flex: 2,
    fontSize: 18,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  night: {
    flex: 3,
    fontSize: 18,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

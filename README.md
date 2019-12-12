# react-native-month-vieew
React Native platform-independent tabs. Could be used for bottom tab bars as well as sectioned views (with tab buttons)

## Why I need to use it?
- Decouple content views from tab bar
- Platform-indepedent
- Possibility to use Flux actions with react-native-router-flux to switch between content views
- Suitable for both bottom tab bar as well as upper sectioned buttons (you just need to define style properly)
- Custom views for each tab icon

## How it works?
Component just iterates over all its children and makes them touchable ('name' is only required attribute of each child).
selectedStyle property represents style should be applied for selected tabs. This property could be set for all tabs or for individual tab.
selectedIconStyle represents style applied for selected tab.
The same, onSelect handler could be set globally for all tabs or/and for individual tab.
You can lock tab buttons (require user to use long press to actuate the button) by passing prop {locked: true}.

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';

class Example extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page}
              style={{backgroundColor: '#10455b'}}
              selectedStyle={styles.monthItemSelected}
              selectedIconStyle={styles.monthSelected}
              onSelect={(el) => this.handleMonthChange(el)}
          >
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
        </Tabs>}
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <Text style={styles.instructions}>
          Selected page: {this.state.page}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
```

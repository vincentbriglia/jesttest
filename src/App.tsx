import * as React from 'react';
import {
  // @ts-ignore
  createAppContainer,
  createStackNavigator,
  NavigationSceneRendererProps,
} from 'react-navigation';
import { View, Button, Text} from 'react-native';

interface IOwnProps extends Required<NavigationSceneRendererProps> {}

export class Welcome extends React.Component<IOwnProps> {
  public handlePress = () => {
    this.props.navigation.navigate('Home');
  };

  public render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Screen</Text>
        <Button title="Go Scan" onPress={this.handlePress} />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Welcome,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
  }
);

const AppContainer = createAppContainer(RootStack);

export class App extends React.Component {
  public render() {
    return (
        <AppContainer />
    );
  }
}
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkBackground,
    height: 80,
    padding: 10,

  },
  // ...
});

const AppBarTab = ({text}) => {
    return (
        <Pressable>
            <Text color="fullWhite" >{text}</Text>
        </Pressable>
    )
}

const AppBar = () => {
    return (
    <View style={styles.container}>
        <AppBarTab text="Repositories"/>
    </View>
    )
};

export default AppBar;
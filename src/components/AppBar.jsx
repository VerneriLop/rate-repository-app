import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkBackground,
    height: 80,
    padding: 10,

  },
  // ...
});

const AppBarTab = ({text, path}) => {
    return (
        <Pressable>
            <Link to={path}>
                <Text color="fullWhite" >{text}</Text>
            </Link>
        </Pressable>
    )
}

const AppBar = () => {
    return (
    <View style={styles.container}>
        <AppBarTab text="Repositories" path="/"/>
        <AppBarTab text="Sign In" path="/signIn"/>
    </View>
    )
};

export default AppBar;
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
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
  tab: {
    margin: 4,
  },
});

const AppBarTab = ({text, path}) => {
    return (
        <Pressable style={styles.tab}>
            <Link to={path}>
                <Text color="fullWhite" >{text}</Text>
            </Link>
        </Pressable>
    )
}

const AppBar = () => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab text="Repositories" path="/"/>
            <AppBarTab text="Sign In" path="/signIn"/>
            {/*Nämä alla olevat sen takia että näkee horisontaalisen scrollauksen toimivan */}
            <AppBarTab text="Repositories" path="/"/>
            <AppBarTab text="Sign In" path="/signIn"/>
            <AppBarTab text="Repositories" path="/"/>
            <AppBarTab text="Sign In" path="/signIn"/>
            <AppBarTab text="Repositories" path="/"/>
            <AppBarTab text="Sign In" path="/signIn"/>
        </ScrollView>
    </View>
    )
};

export default AppBar;
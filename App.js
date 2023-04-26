import { View } from 'react-native';
import Main from './src/components/Main';
import RepositoryList from './src/components/RepositoryList';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
};

export default App;

/*
  <View>
    <Main />
    <RepositoryList/>
  </View>
*/
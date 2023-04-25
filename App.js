import { View } from 'react-native';
import Main from './src/components/Main';
import RepositoryList from './src/components/RepositoryList';

const App = () => {
  return (
  <View>
    <Main />
    <RepositoryList/>
  </View>
  )
};

export default App;
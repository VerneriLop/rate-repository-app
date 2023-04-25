import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  Row: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  Column: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 5,
  },
  sideMargins: {
    marginLeft: 5,
    marginRight: 5,
  },
  language: {
    backgroundColor: 'blue',
    color: theme.colors.white,
    alignSelf: 'flex-start'
  }
});

const Column = ({count, text}) => {
  return (
    <View style={styles.sideMargins}>
      {count > 1000 ? 
        <Text>{(count/1000).toFixed(1)}k</Text>
        :
        <Text>{count}</Text>
      }
      <Text>{text}</Text>
    </View>
  )
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Row}>
        <Image style={styles.tinyLogo} source={{uri: item.ownerAvatarUrl}}/>
        <View style={styles.Column}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.Row}>
        <Column count={item.stargazersCount} text='Stars'/>
        <Column count={item.forksCount} text='Forks'/>
        <Column count={item.reviewCount} text='Reviews'/>
        <Column count={item.ratingAverage} text='Rating'/>
      </View>
    </View>
  );
};

export default RepositoryItem;

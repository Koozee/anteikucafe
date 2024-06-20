import * as React from 'react';
import {
  Button,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function NewsFeed() {
  const navigation = useNavigation();
  const [dataOrder, setDataOrder] = React.useState([]);

  const data = require('../newsFeed.json');
  React.useEffect(() => {
    setDataOrder(data);
  }, []);
  const renderItems = ({ item }) => {
    return (
      <View key={item.id} style={styleScreen.boxItem}>
        <TouchableHighlight>
          <Image style={styleScreen.img} source={{ uri: item.img }} />
        </TouchableHighlight>
        <View style={styleScreen.wrapper}>
          <View style={styleScreen.wrapperText}>
            <Text style={styleScreen.tittleText}>{item.tittle}</Text>
            <Text style={styleScreen.userText}>{item.user}</Text>
          </View>
          <Image
            style={styleScreen.imgProfile}
            source={{ uri: item.userImg }}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styleScreen.containerScreen}>
      <Text style={styleScreen.headerTittle}>News and Feed</Text>
      <FlatList data={dataOrder} renderItem={renderItems} />
    </SafeAreaView>
  );
}

const styleScreen = StyleSheet.create({
  containerScreen: {
    backgroundColor: '#543310',
    height: '100%',
  },
  headerTittle: {
    color: 'white',
    fontSize: 22.5,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 5.5,
  },
  boxItem: {
    marginVertical: 10,
    marginHorizontal: 'auto',
    backgroundColor: '#74512D',
    width: '95%',
    height: 300,
    borderRadius: 10,
    shadowRadius: 5,
    borderColor: 'rgb(68,68,68)',
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgProfile: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  wrapperText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  tittleText: {
    color: 'white',
    fontWeight: '500',
    paddingVertical: 10,
    fontSize: 18,
  },
  userText: {
    color: 'white',
    fontSize: 17,
  },
});


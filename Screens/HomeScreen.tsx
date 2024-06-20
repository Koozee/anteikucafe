import * as React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [dataOrder, setDataOrder] = React.useState([]);

  const data = require('../coffe.json');
  React.useEffect(() => {
    setDataOrder(data);
  }, []);

  const renderItems = ({ item }) => {
    return (
      <View key={item.id} style={styleScreen.boxItem}>
        <Image style={styleScreen.img} source={{ uri: item.imgCoffe }} />
        <Text style={styleScreen.productname}>{item.coffee}</Text>
        <View style={styleScreen.wrapper}>
          <Text style={styleScreen.productprice}>Rp. {item.price}</Text>
          <TouchableHighlight>
            <View style={styleScreen.buttonAdd}>
              <Ionicons name="add" size={20} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styleScreen.containerScreen}>
      <Text style={styleScreen.headerTittle}>Good Morning,</Text>
      <Text style={styleScreen.headerTittle}>Let's Take Your Coffe</Text>
      <View style={styleScreen.searchContainer}>
        <Ionicons style={styleScreen.iconSearch} name="search" size={20} />
        <TextInput style={styleScreen.search} placeholder="Search Coffee" />
      </View>
      <FlatList data={dataOrder} renderItem={renderItems} numColumns={2} />
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
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderRadius: 20,
    borderWidth: 1.5,
    paddingVertical: 5,
  },
  iconSearch: {
    paddingLeft: 20,
  },
  search: {
    width: '90%',
    fontSize: 17,
    paddingLeft: 10,
  },
  boxItem: {
    marginVertical: 10,
    marginHorizontal: 'auto',
    backgroundColor: '#74512D',
    width: '45%',
    maxHeight: 350,
    paddingHorizontal: 10,
    paddingTop: 20,
    borderRadius: 10,
    shadowRadius: 10,
    borderColor: 'rgb(68,68,68)',
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productname: {
    color: 'white',
    fontWeight: '500',
    paddingVertical: 10,
    fontSize: 22,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  productprice: {
    color: 'white',
    fontSize: 18,
  },
  buttonAdd: {
    backgroundColor: '#AF8F6F',
    borderRadius: 7,
    padding: 5,
  },
});


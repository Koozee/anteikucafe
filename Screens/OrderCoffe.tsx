import * as React from 'react';
import {
  Button,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderCoffe() {
  const navigation = useNavigation();
  const [dataOrder, setDataOrder] = React.useState([]);
  const [countOrder, setCountOrder] = React.useState();
  const [totalPrice, setTotalPrice] = React.useState();

  const data = require('../order.json');

  React.useEffect(() => {
    setDataOrder(data);
    const initialCount = {};
    data.forEach((item) => {
      initialCount[item.id] = 1; // Initialize count for each item
    });
    setCountOrder(initialCount);
    calculateTotalPrice(initialCount, data); // Initial total price calculation
  }, []);

  const handleDecrement = (id) => {
    setCountOrder((prevCount) => {
      const newCount = { ...prevCount };
      if (newCount[id] > 0) {
        newCount[id] -= 1;
        calculateTotalPrice(newCount, dataOrder); // Update total price
      }
      return newCount;
    });
  };

  const handleIncrement = (id) => {
    setCountOrder((prevCount) => {
      const newCount = { ...prevCount };
      newCount[id] += 1;
      calculateTotalPrice(newCount, dataOrder); // Update total price
      return newCount;
    });
  };

  const calculateTotalPrice = (counts, items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * (counts[item.id] || 0);
    });
    setTotalPrice(total);
  };

  const RenderItems = () => {
    return dataOrder.map((item) => (
      <View key={item.id} style={styleScreen.boxItem}>
        <View style={styleScreen.wrapper}>
          <Image style={styleScreen.img} source={{ uri: item.imgCoffe }} />
          <View style={styleScreen.wrapperText}>
            <Text style={styleScreen.productname}>{item.coffee}</Text>
            <Text style={styleScreen.productprice}>Rp. {item.price}</Text>
          </View>
          <View style={styleScreen.wrapperCount}>
            <TouchableHighlight
              onPress={() => handleDecrement(item.id)}
              disabled={countOrder[item.id] === 0}>
              <View style={styleScreen.buttonCount}>
                <Ionicons name="remove" size={17} />
              </View>
            </TouchableHighlight>
            <Text style={styleScreen.countOrder}>{countOrder[item.id]}</Text>
            <TouchableHighlight onPress={() => handleIncrement(item.id)}>
              <View style={styleScreen.buttonCount}>
                <Ionicons name="add" size={17} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styleScreen.containerScreen}>
      <Text style={styleScreen.headerTittle}>My Order</Text>
      <RenderItems />
      <View style={styleScreen.totalContainer}>
        <Text style={styleScreen.totalLabel}>Total Price:</Text>
        <Text style={styleScreen.totalPrice}>Rp. {totalPrice}</Text>
      </View>
      <TouchableHighlight
        style={styleScreen.buttonOrder}
        onPress={() =>
          totalPrice !== 0
            ? Alert.alert('Order Successfull!')
            : Alert.alert('Please Order Some Drink!')
        }>
        <Text style={styleScreen.textOrder}>Order Now</Text>
      </TouchableHighlight>
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
    width: '90%',
    height: 150,
    paddingHorizontal: 10,
    paddingTop: 20,
    borderRadius: 10,
    shadowRadius: 5,
    borderColor: 'rgb(68,68,68)',
    borderWidth: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  wrapperCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  img: {
    width: '33%',
    height: 100,
    borderRadius: 10,
  },
  productname: {
    color: 'white',
    fontWeight: '500',
    paddingVertical: 10,
    fontSize: 20,
  },
  productprice: {
    color: 'white',
    fontSize: 17,
  },
  buttonCount: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 5,
    borderWidth: 1,
  },
  countOrder: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    marginHorizontal: 5,
  },
  totalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '30%',
    top: '10%',
    backgroundColor: '#C08261',
    borderTopStartRadius: 70,
    borderTopEndRadius: 70,
    shadowRadius: 10,
  },
  totalLabel: {
    fontSize: 20,
    color: 'white',
  },
  totalPrice: {
    fontSize: 20,
    color: 'white',
  },
  buttonOrder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    top: '2%',
    backgroundColor: '#9A3B3B',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    shadowRadius: 10,
    shadowColor: '#6C5B6F',
  },
  textOrder: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 20,
  },
});

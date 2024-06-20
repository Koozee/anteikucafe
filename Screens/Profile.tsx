import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Option = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: '#F2ECBE',
          flexDirection: 'row',
        }}></View>
      <TouchableOpacity>
        <View style={styleScreen.optionMenu}>
          <View style={styleScreen.iconText}>
            <Ionicons name="person-sharp" size={35} />
            <Text style={styleScreen.textIcon}>My Profile</Text>
          </View>
          <Ionicons name="chevron-forward-circle-sharp" size={35} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styleScreen.optionMenu}>
          <View style={styleScreen.iconText}>
            <Ionicons name="people-sharp" size={35} />
            <Text style={styleScreen.textIcon}>My Friend</Text>
          </View>
          <Ionicons name="chevron-forward-circle-sharp" size={35} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styleScreen.optionMenu}>
          <View style={styleScreen.iconText}>
            <Ionicons name="settings-sharp" size={35} />
            <Text style={styleScreen.textIcon}>Settings</Text>
          </View>
          <Ionicons name="chevron-forward-circle-sharp" size={35} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styleScreen.optionMenu}>
          <View style={styleScreen.iconText}>
            <Ionicons name="headset-sharp" size={35} />
            <Text style={styleScreen.textIcon}>Support</Text>
          </View>
          <Ionicons name="chevron-forward-circle-sharp" size={35} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Alert.alert('Logout', 'Want To Leave Now?', [
            {
              text: 'Cancel',
            },
            { text: 'OK', onPress: () => navigation.replace('Login') },
          ])
        }>
        <View style={styleScreen.optionMenu}>
          <View style={styleScreen.iconText}>
            <Ionicons name="log-out-sharp" size={35} />
            <Text style={styleScreen.textIcon}>Log Out</Text>
          </View>
          <Ionicons name="chevron-forward-circle-sharp" size={35} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styleScreen.containerScreen}>
      <View style={styleScreen.containerProfile}>
        <Image
          style={styleScreen.imgProfile}
          source={{
            uri: 'https://imgix.ranker.com/list_img_v2/8322/2728322/original/best-ken-kaneki-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720',
          }}
        />
        <Text style={styleScreen.userName}>KanekiKen</Text>
        <Text style={styleScreen.userEmail}>kaneki@gmail.com</Text>
      </View>
      <Option navigation={navigation} />
    </SafeAreaView>
  );
}

const styleScreen = StyleSheet.create({
  containerScreen: {
    backgroundColor: '#543310',
    height: '100%',
  },
  containerProfile: {
    backgroundColor: '#F2ECBE',
    position: 'relative',
    width: '90%',
    marginTop: 80,
    marginHorizontal: 'auto',
    borderRadius: 10,
  },
  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    bottom: '20%',
    marginHorizontal: 'auto',
  },
  userName: {
    color: 'black',
    fontSize: 22.5,
    fontWeight: 'bold',
    paddingLeft: 10,
    textAlign: 'center',
    bottom: '10%',
  },
  userEmail: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 10,
    paddingTop: 5.5,
    textAlign: 'center',
    bottom: '10%',
  },
  optionMenu: {
    width: '100%',
    backgroundColor: '#F2ECBE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 10,
  },
});

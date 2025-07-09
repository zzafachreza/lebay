import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {colors, fonts, windowWidth} from '../../utils';
import {MyButton, MyHeader} from '../../components';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {apiURL, getData, MYAPP} from '../../utils/localStorage';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Alert} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

export default function Home({navigation, route}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(u => {
      setUser(u);
      console.log(u);
    });
  }, []);

  const menuData = [
    {
      label: 'Penjualan',
      color: '#FEE2E2',
      icon: 'cart-outline',
      iconColor: '#2B8951',
      target: 'Jual',
    },
    {
      label: 'Pembelian',
      color: '#DBEAFE',
      icon: 'archive-outline',
      iconColor: '#3C94BC',
      target: 'Pembelian',
    },
    {
      label: 'Customer',
      color: '#DCFCE7',
      icon: 'people-outline',
      iconColor: '#359237',
      target: 'Pelanggan',
    },
    {
      label: 'Supplier',
      color: '#FBE1A4',
      icon: 'business-outline',
      iconColor: '#D8614E',
      target: 'Supplier',
    },
    {
      label: 'Barang',
      color: '#F1E6D2',
      icon: 'grid-outline',
      iconColor: '#D8614E',
      target: 'Barang',
    },
    {
      label: 'Laporan',
      color: '#F0E1FF',
      icon: 'receipt-outline',
      iconColor: '#B17FDD',
      target: 'Laporan',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FastImage
          // resizeMode={FastImage.resizeMode.stretch}
          source={require('../../assets/logo.png')}
          style={{
            width: 200,
            height: 100,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: 14,
          }}>
          Hi, {user.nama_lengkap}
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: 12,
          }}>
          Yuk mudahkan keuangan bisnis dengan Lebay Stock
        </Text>
      </View>

      {/* Menu Grid */}
      <View style={styles.grid}>
        {menuData.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.target)}
            key={index}
            style={[styles.menuItem, {backgroundColor: item.color}]}>
            <Icon
              type="ionicon"
              name={item.icon}
              color={item.iconColor}
              size={40}
            />
            <Text
              style={{
                ...styles.menuText,
                color: item.iconColor,
              }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Kas & Bank Section */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    backgroundColor: '#2563EB',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  time: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 15,
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    aspectRatio: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  menuText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.secondary[600],
  },
  kasBank: {
    // flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  kasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kasCard: {
    width: '48%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  kasLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  kasTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  kasValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

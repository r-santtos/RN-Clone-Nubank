import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { 
  AntDesign, 
  Ionicons, 
  MaterialCommunityIcons, 
  FontAwesome5 
} from '@expo/vector-icons';

export default function Dashboard() {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      // contentContainerStyle={{
      //   alignItems: 'center',
      //   justifyContent: 'flex-start',
      // }}
    >
      {/** HEADER COMPONENT */}
      <View style={styles.header}>
        <View style={[styles.tabIcons, {justifyContent: 'space-between'}]}>
          <TouchableOpacity style={styles.btnUser}>
            <AntDesign name="user" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.tabIcons}>
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="eyeo" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <AntDesign name="questioncircleo" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Ionicons name="mail-unread-outline" size={24}  color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.headerTxt}>Olá, Ricardo</Text>
      </View>

      {/** BALANCE COMPONENT */}
      <View style={styles.balance}>
        <View style={styles.headerBalance}>
          <Text style={styles.headerBalanceTxt}>Conta</Text>
          <AntDesign name="right" size={20} color="black" />
        </View>

        <Text style={[
          styles.headerBalanceTxt, 
          {marginVertical: 16, fontSize: 24}]}
        >
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
          }).format(1200)}
        </Text>
      </View>

      {/** SCROLL BTNS */}
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
      >
        <TouchableOpacity style={styles.btnScroll}>
          <View style={styles.btnIcon}>
            <AntDesign name="qrcode" size={24} color="black" />
          </View>
          <Text style={styles.btnScrollTxt}>Área Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnScroll}>
          <View style={styles.btnIcon}>
            <AntDesign name="barcode" size={22} color="black" />
          </View>
          <Text style={styles.btnScrollTxt}>Pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnScroll}>
          <View style={styles.btnIcon}>
            <MaterialCommunityIcons name="credit-card-refund-outline" size={30} color="black" />
          </View>
          <Text style={styles.btnScrollTxt}>transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnScroll}>
          <View style={styles.btnIcon}>
            <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color="black" />
          </View>
          <Text style={styles.btnScrollTxt}>depositar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnScroll}>
          <View style={styles.btnIcon}>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <Text style={styles.btnScrollTxt}>infor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnScroll}>
          <View style={styles.btnIcon}>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <Text style={styles.btnScrollTxt}>infor</Text>
        </TouchableOpacity>
      </ScrollView>

      {/** MY CARD */}
      <TouchableOpacity style={{paddingHorizontal: 16,}}>
        <View style={styles.myCard}>
          <FontAwesome5 name="cc-mastercard" size={24} color="black" />
          <Text style={styles.myCardTxt}>Meus Cartões</Text>
        </View>
      </TouchableOpacity>

      {/** SCROLL CARDS */}
      <ScrollView 
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginVertical: 30,
          paddingHorizontal: 8,
        }}
      >
        <TouchableOpacity style={styles.btnScrollCards}>
          <Text style={styles.btnScrollTxt}>
            Salve seus amigos da burocracia.
          </Text>

          <Text style={{color: '#8100dd'}}>
            Faça um convite para o Nubank.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnScrollCards}>
          <Text style={styles.btnScrollTxt}>
            Salve seus amigos da burocracia.
          </Text>

          <Text style={{color: '#8100dd'}}>
            Faça um convite para o Nubank.
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/** CARDS */}
      <TouchableOpacity style={styles.cards}>
        <FontAwesome5 name="cc-mastercard" size={24} color="black" />
        <Text style={styles.cardsTxt}>Cartão de Crédito</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    width: '100%',
    backgroundColor: '#8100dd',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 16,
  },
  tabIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnUser: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9b22e6'
  },
  btn: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },
  /** BALANCE COMPONENT */
  balance: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerBalance: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBalanceTxt: {
    fontSize: 20,
    fontWeight: '700'
  },

  /** SCROLL BTNS */
  btnScroll: {
    width: 75,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 4,
    paddingVertical: 16,
  },
  btnIcon: {
    width: 65,
    height: 65,
    borderRadius: 65/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f1f6',
    marginBottom: 8,
  },
  btnScrollTxt: {
    fontWeight: '700',
    textTransform: 'capitalize'
  },

  /** MY CARD */
  myCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f1f6',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  myCardTxt: {
    fontWeight: '700',
    marginLeft: 16,
  },

  /** SCROLL CARDS */
  btnScrollCards: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: '#f0f1f6'
  },

  /** CARDS */
  cards: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#c6c6c6',
  },
  cardsTxt: {
    fontWeight: '700',
    fontSize: 20,
  }
})
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '2', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '3', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '4', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '5', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '6', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '7', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '8', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '9', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '10', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl:'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '11', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '12', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '13', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '14', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '15', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '16', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '17', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '18', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '19', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '20', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
  { id: '21', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://lh5.googleusercontent.com/18iTBm_yW8skqhVu_-CP3D9009xgX4wPDW60Uspv6aa450eVShiQHeDmvxkomq3087VXVEgSJa2bzNI3vGhXZyB8Vdz2Vq8_ZZWjgwEPabCG2DavZDiHR2_u__ar0qWGkA=w1280' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Toko Villager</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});


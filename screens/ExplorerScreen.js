import React from 'react';
import { 
  SafeAreaView, View, Text, TextInput, FlatList, 
  Image, TouchableOpacity, StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Danh mục món ăn
const categories = [
  { name: 'Pizza', image: require('../assets/pizza.jpg') },
  { name: 'Burgers', image: require('../assets/burger.jpg') },
  { name: 'Steak', image: require('../assets/steak.jpg') },
];

// Danh sách món ăn
const items = [
  { name: 'Salad', price: '$1', image: require('../assets/salad.jpg'), },
  { name: 'Sushi', price: '$3', image: require('../assets/sushi.jpg') },
  { name: 'Pasta', price: '$2', image: require('../assets/pasta.jpg') },
  { name: 'Pizza', price: '$5', image: require('../assets/pizza.jpg'), discount: '10% OFF'},
  { name: 'Burger', price: '$4', image: require('../assets/burger.jpg') },
];

export function ExplorerScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        
        {/* Thanh tìm kiếm */}
        <View style={styles.searchContainer}>
          <Icon name="location-on" size={24} color="#ff9800" style={styles.icon} />
          <TextInput style={styles.searchBar} placeholder="Search for meals or area" />
          <Icon name="search" size={24} color="#888" style={styles.icon} />
        </View>

        {/* Danh mục món ăn */}
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* Món ăn phổ biến 1 */}
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items.slice(0, 3)} // Chỉ hiển thị 3 món đầu tiên
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
              {item.discount && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
              )}
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* Món ăn phổ biến 2 (ở giữa) */}
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items.slice(3)} // Hiển thị các món còn lại
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
              {item.discount && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
              )}
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    paddingHorizontal: 20, 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  searchBar: {
    flex: 1,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#ff9800',
  },
  category: { 
    marginRight: 10, 
    alignItems: 'center' 
  },
  categoryImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 10 
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemContainer: {
    position: 'relative',
    marginRight: 15,
    alignItems: 'center',
  },
  itemImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 15, // Cạnh bo tròn đẹp hơn
  },
  discountBadge: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'red',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#ff9800',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ExplorerScreen;

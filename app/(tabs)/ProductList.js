import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { products } from "../../products";
import { Product } from "../components/Product";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductList = () => {
  const renderItem = ({ item }) => (
    <Product
      image={item.image}
      title={item.title}
      //   description={item.description}
      //   price={item.price}
      //   discount={item.discount}
      //   variants={item.variants}
    />

    // <Text style={{ backgroundColor: "red" }}>
    //   {console.log("itemme ", item)}Me render too
    // </Text>
  );
  return (
    <SafeAreaView style={styles1.safe}>
      <FlatList
        style={styles1.flatsyle}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.image}
        numColumns={2}
        //   ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.contentContainer} // Add content container style
      />
    </SafeAreaView>
  );
};

const styles1 = StyleSheet.create({
  container: {
    margin: 2,
    marginTop: 30,
    flex: 1,
    backgroundColor: "pink",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  flatsyle: {
    // width: "99%",
    backgroundColor: "steelblue",
    margin: 3,
    borderColor: "red",
    borderWidth: 5,
    // overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "Inter-SemiBoldItalic",
  },
  // safe: {
  //   flex: 1,
  //   backgroundColor: "yellow",
  // },
});

const styles = StyleSheet.create({
  separator: {
    height: 2, // Set the separator height
    backgroundColor: "blue", // Set the separator color
    marginHorizontal: 10,
    borderRadius: 8, // Add margin to avoid touching list edges
  },
  productItem: {
    flex: 1, // Allow items to fill available space equally
    flexDirection: "column",
    margin: 0,
    padding: 10,
    // backgroundColor: theme.colors.mydicl,
    borderRadius: 5,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderColor: "pink",
    borderWidth: 2,
  },
  productImage: {
    flex: 1,
    width: "100%",
    // height:'auto', // Adjust image height as needed
    height: 400,
    // contentFit: 'contain',
    backgroundColor: "red",
  },
  productDetails: {
    backgroundColor: "orange",
    marginTop: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
  productDiscount: {
    fontSize: 12,
    color: "green",
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  productVariants: {
    fontSize: 12,
    color: "#ccc",
  },
});

// export {default} from './.storybook';

export default ProductList;

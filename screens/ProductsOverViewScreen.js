import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverViewScreen = props => {
	const products = useSelector(state => state.products.products);
	return (
		<FlatList
			data={products}
			renderItem={itemData => <Text>{itemData.item.title}</Text>}
		/>
	);
};

export default ProductsOverViewScreen;

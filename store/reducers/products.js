import PRODUCTS from '../../data/products-db';

const initialState = {
	products: PRODUCTS,
	userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
};

export default (state = initialState, action) => {
	return state;
};

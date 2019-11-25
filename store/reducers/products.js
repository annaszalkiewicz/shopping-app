import PRODUCTS from '../../data/products-db';

const initialState = {
	products: PRODUCTS,
	userProducts: PRODUCTS.filter((product = 0 > product.ownerID === 'u1'))
};

export default (state = initialState, action) => {
	return state;
};

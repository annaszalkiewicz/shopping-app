import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverViewScreen from '../screens/ProductsOverViewScreen';
import variables from '../constants/variables';

const ProductsNavigator = createStackNavigator({
  productsOverview: ProductsOverViewScreen
}, {
  defaultNavigationOption: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? variables.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : variables.primaryColor
  }
})

export default createAppContainer(ProductsNavigator);
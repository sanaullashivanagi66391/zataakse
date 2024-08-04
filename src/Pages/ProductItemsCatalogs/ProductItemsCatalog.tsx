import { useNavigation } from '@react-navigation/native';
import { personalAndBeautyCare, snacksAndDrinks } from 'MockData/DummyProductItems';
import * as React from 'react';

import ProductItemsCatalogTemplate from 'Templates/ProductItemsCatalog';
import { DashboardStackParamListProp } from 'Types/StackNavigatorParams';

const ProductItemsCatalog = () => {

   const navigation = useNavigation<DashboardStackParamListProp>();

   const onPressOfItem = () => {
      navigation.navigate('SelectedProductCategory')

   }

   const onGoBack = () => {

   }

   const onSearch = () => {

   }

 return(
    <ProductItemsCatalogTemplate 
       onPressOfItem={onPressOfItem}
       onGoBack={onGoBack} onSearch={onSearch} 
       snacksAndDrinks={
        {
         title : "SNACKS & DRINKS",
         list : snacksAndDrinks,
         onPressOfItem
        }
       } 
       beautyCareAndPersonal={{
         title : "Beauty & Personal Care",
         list : personalAndBeautyCare,
         onPressOfItem
       }}   
       
       />
 )
}
export default ProductItemsCatalog;
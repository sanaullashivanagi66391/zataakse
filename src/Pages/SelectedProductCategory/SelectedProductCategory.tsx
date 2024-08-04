import { useNavigation } from '@react-navigation/native';
import { items, snackItems } from 'MockData/DummyProductItems';
import * as React from 'react';

import SelectedProductCategoryTemplate from 'Templates/SelectedProductCategory';
import { DashboardStackParamListProp } from 'Types/StackNavigatorParams';

const SelectedProductCategory = () =>{
   const navigation = useNavigation<DashboardStackParamListProp>();

   const onPressBack = () =>{
  navigation.goBack()

   }

   const onSearch = () => {
      navigation.navigate('SearchWithItemOrTrend')
   }

   const onSelectItem = () => {

   }
   
 return(
    <SelectedProductCategoryTemplate 
       relatedItems={items}
       onPressBack={onPressBack}
       onSearch={onSearch} 
       data={snackItems}
        onSelectItem={onSelectItem}    />
 )
}

export default SelectedProductCategory;
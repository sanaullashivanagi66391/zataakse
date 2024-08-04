import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Orders from 'Pages/Orders';
import CartOverView from 'Pages/CartOverView';
import Profile from 'Pages/Profile';
import OrderBottomBar from 'Assets/SvgIcons/OrderBottomBar';
import TabBar from './TabBar';
import ProductItemsCatalog from 'Pages/ProductItemsCatalogs';



const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
    
    const tabs = [
        {
          name: 'Orders',
          label: 'Orders',
          component: Orders,
        },
        {
          name: 'Products',
          label: 'Products',
          component: ProductItemsCatalog,
        },
        {
          name: 'Overview',
          label: 'Overview',
          component: CartOverView,
        },
        {
          name: 'Profile',
          label: 'Profile',
          component: Profile,
        },
      ];
 return(
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName={'Products'}
    >
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
          options={{
            headerShown : false,
          }}
            key={index}   
            name={_.name}
            component={_.component}
           
          />
        );
      })}
    </Tab.Navigator>
 )
}
export default TabNavigation ; 
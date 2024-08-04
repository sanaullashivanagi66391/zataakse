import React, { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';

import { colorValueAndCodeMapper } from 'Utils/Colors';
import Typography from 'Atoms/Typography';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';
import AnimatedNavButton from 'Molecules/AnimatedNavButton';
import OrderBottomBar from 'Assets/SvgIcons/OrderBottomBar';
import ProductInventory from 'Assets/SvgIcons/ProductInventory';
import INRCurrency from 'Assets/SvgIcons/INRCurrency';
import Profile from 'Assets/SvgIcons/Profile';

const TAB_BAR_WIDTH = Dimensions.get('window').width / 5;
const ANIMATED_PART_HEIGHT = 5;

const TabBar: React.FC<any> = ({ state, descriptors, navigation }) => {
   
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
                {state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const getNavBarIcon = (name: string, isFocused: boolean ) => {
                       
                        if (name == 'Orders') {
                            return (
                            <AnimatedNavButton
                                    isFocused={isFocused}
                                    icon={<OrderBottomBar 
                                        width={widthPercentageToDP('6.11%')}
                                        height={heightPercentageToDP('3.43%')}
                                         />} 
                                    title={name} />
                            )
                        } else if (name == 'Products') {
                            return (
                                <AnimatedNavButton
                                    isFocused={isFocused}
                                    icon={ <ProductInventory 
                                        width={widthPercentageToDP('6.11%')}
                                        height={heightPercentageToDP('3.43%')}
                                         /> }
                                    title={name}
                                    />
                            )
                        
                        } else if (name == 'Overview') {
                            return (
                                <AnimatedNavButton
                                isFocused={isFocused}
                                title={name}
                                icon={<INRCurrency 
                                    width={widthPercentageToDP('6.11%')}
                                    height={heightPercentageToDP('3.43%')}
                                    />}
                                />
                                
                            )

                        } else if (name == "Profile") {
                            return (
                                <AnimatedNavButton
                                    isFocused={isFocused}
                                    
                                    icon={ <Profile 
                                        width={widthPercentageToDP('6.11%')}
                                        height={heightPercentageToDP('3.43%')}
                                    /> }
                                    title={name}
                                    />
                            )

                        } 
                    }


                    return (
                        <TouchableWithoutFeedback
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabButton}
                            key={`${index}--${route.key}`}
                        >
                            <View style={styles.innerView}>
                                {
                                    getNavBarIcon(route.name, isFocused)
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: colorValueAndCodeMapper.Alabaster,
    },
    tabButton: {
        flex: 1,
    },
    innerView: {
        width: Dimensions.get('window').width / 4,
        height : heightPercentageToDP('9.37%'),
        alignItems : 'center',
        justifyContent : 'center'
    },
    iconText: {
        width: TAB_BAR_WIDTH,
        textAlign: 'center',
    },
    animatedView: {
        width: TAB_BAR_WIDTH,
        height: ANIMATED_PART_HEIGHT,
        backgroundColor: colorValueAndCodeMapper.Gallery,
    },
    animatedWrapper: { width: TAB_BAR_WIDTH, alignItems: 'center', justifyContent: 'center' },
});

export default TabBar;
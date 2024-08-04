import HeaderWithGoBackAndSearch from 'Organisms/HeaderWithGoBackAndSearch';
import HeaderWithList from 'Organisms/HeaderWithList';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const ProductItemsCatalog: React.FC<ProductItemsCatalogNS.IProps> = ({
    onGoBack,
    onSearch,
    onPressOfItem,
    snacksAndDrinks,
    beautyCareAndPersonal,
    
}) => {
    return (
        <View style={styles.mainContainer}>
            <HeaderWithGoBackAndSearch
                onGoBack={onGoBack}
                title={'Product Categories'}
                description={'Select any product to add'}
                onSearch={onSearch}

            />

            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}
                bounces={false}
            >
                <HeaderWithList
                    onPressOfItem={snacksAndDrinks.onPressOfItem}
                    title={snacksAndDrinks.title} 
                    list={snacksAndDrinks.list}

                     />

                <View style={{
                    marginTop: heightPercentageToDP('3.43%')
                }}>
                    <HeaderWithList
                        onPressOfItem={beautyCareAndPersonal.onPressOfItem}
                        title={beautyCareAndPersonal.title} 
                        list={beautyCareAndPersonal.list} />

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colorValueAndCodeMapper.Alabaster
    },
    container: {
        paddingHorizontal: widthPercentageToDP('3.33%'),
        marginTop: heightPercentageToDP('2.5%')
    }
})
export default ProductItemsCatalog;
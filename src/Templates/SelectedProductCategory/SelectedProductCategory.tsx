
import HeaderWithGoBackAndSearch from 'Organisms/HeaderWithGoBackAndSearch';
import HorizontalListWithPagination from 'Organisms/HorizontalListWithPagination';
import RelatedProductItems from 'Organisms/RelatedProductItems';
import * as React from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP } from 'Utils/Helpers';

const SelectedProductCategory: React.FC<SelectedProductCategoryNS.IProps> = ({
    onPressBack,
    onSearch,
    data,
    relatedItems,
    onSelectItem
}) => {
    return (
        <View style={{
            backgroundColor: '#FCFCFC',
            height: '100%',
            width: "100%",
        }}>
            <HeaderWithGoBackAndSearch
                onGoBack={onPressBack}
                title={'Product Categories'}
                description={'Select any product to add'}
                onSearch={onSearch}

            />
            <View style={{
                paddingHorizontal: widthPercentageToDP('3.33%'),
            }}>

                <HorizontalListWithPagination
                    data={data}
                    onSelectItem={onSelectItem} />

                <RelatedProductItems

                    items={relatedItems}
                    onItemSelect={onSelectItem} />
            </View>
        </View>
    )
}
export default SelectedProductCategory;
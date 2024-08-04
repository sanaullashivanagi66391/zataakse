import ItemInfo from 'Molecules/ItemInfo';
import * as React from 'react';
import { View, FlatList } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP } from 'Utils/Helpers';

const RelatedProductItems: React.FC<RelatedProductItemsNS.IProps> = ({
    items,
    onItemSelect
}) => {

    const renderItem = ({ item }: { item: RelatedProductItemsNS.IproductItem }) => {
        return (
            <ItemInfo id={item.id} label={item.lable} image={item.image} price={item.price} weight={item.weight}
            />
        )

    }
    return (
        <View style={{
            backgroundColor : colorValueAndCodeMapper.Alabaster,
            elevation : 1,
            paddingVertical : 8,
            borderRadius : 10,
            alignItems : 'center',
            height : heightPercentageToDP('53.15%')
        }}>
        <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled
        ListFooterComponent={() => (
            <View style={{
                height : 80
            }} />
        )}
            data={items}
            ItemSeparatorComponent={()=>(
                <View style={{
                    height :8
                }} />
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            
            
        />
        </View>

    )
}

export default RelatedProductItems;
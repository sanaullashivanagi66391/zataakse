import Typography from 'Atoms/Typography';
import ButtonWithImageNTitle from 'Molecules/ButtonWithImageNTitle';
import * as React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Text } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const HeaderWithList: React.FC<HeaderWithListNS.IProps> = ({
    title,
    list,
    onPressOfItem
}) => {


    return (
        <View>
            <View style={styles.headerAndLineContainer}>
                <Typography text={title} sizeAndWeight='9-500' />
                <View style={{
                    borderWidth: 0.5,
                    borderRadius: 0.5,
                    borderColor: colorValueAndCodeMapper.Gallery,
                    width: widthPercentageToDP('49.93%')
                }} />
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    data={list}
                    numColumns={4}
                    
                    contentContainerStyle={{
                        gap : heightPercentageToDP('1.87%')
                    }}
                    columnWrapperStyle = {{
                        gap : widthPercentageToDP('2.77%')
                    }}
                    renderItem={({ item, index, separators }) => (
                        <ButtonWithImageNTitle
                            icon={item.icon}
                            label={item.label}
                            onPress={onPressOfItem}
                            id={item.id}
                        />
                    )}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listContainer: {
    marginTop : heightPercentageToDP('3.17%')
    },
    line: {
        height: 2,
        width: '100%'
    },
    headerAndLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPercentageToDP('2.30%'),
        marginLeft: widthPercentageToDP('1.125%')
    }
})

export default HeaderWithList;
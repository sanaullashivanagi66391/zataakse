import INRCurrency from 'Assets/SvgIcons/INRCurrency';
import Typography from 'Atoms/Typography';
import * as React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const ItemInfo: React.FC<ItemInfoNS.IProps> = ({
    label,
    image,
    price,
    weight,
    id
}) => {

    //temp state

    const [selectedIndex, setSeletecIndex] = React.useState();
    // const [addBtnBgColor , setAddBtnBgColor] = React.useState<>('')

    const addItem = () => {


    }
    return (
        <View style={{
            width: widthPercentageToDP('88.88%'),
            backgroundColor: colorValueAndCodeMapper.Gallery,
            paddingHorizontal: widthPercentageToDP('2.22%'),
            borderRadius: 8,
            paddingVertical: heightPercentageToDP('1.25%'),
        }}>
            <View style={styles.nameIconContainer}>
                <View style={{
                    width: widthPercentageToDP('63.33%')
                }}>
                    <Typography text={label} textAlign='left' sizeAndWeight={'14-400'} color='MineShaft' />
                </View>
                <Image
                    source={{ uri: image }}
                    width={widthPercentageToDP('20.88%')}
                    height={heightPercentageToDP('10.65%')}
                />
            </View>


            <View style={styles.bottomInfoContainer}>
                <Typography text={`${weight}g`} sizeAndWeight='16-700' color='MineShaft' />

                <View style={{
                    flexDirection: 'row',
                    gap: widthPercentageToDP('4.44%')
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            marginBottom: -6,
                            marginRight: -8
                        }}>
                            <INRCurrency height={21} width={21} fill={colorValueAndCodeMapper.MineShaft} />
                        </View>
                        <Typography text={`${price}`} sizeAndWeight='16-700' color='MineShaft' />
                    </View>

                    <Pressable 
                    onPress={addItem}
                    style={{
                        width: widthPercentageToDP('18.88%'),
                        height: heightPercentageToDP('4.68%'),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4,
                        shadowColor: '#171717',
                        elevation: 1,
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.8,
                        borderRadius: 4,
                        backgroundColor: colorValueAndCodeMapper.Alabaster
                    }}>
                        <Typography text={'+'} sizeAndWeight='12-400' color="Lima" />
                        <Typography text={'Add'} sizeAndWeight='12-400' color="Lima" />
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        marginTop: heightPercentageToDP('3.12%')
    },
    nameIconContainer: {
        flexDirection: 'row'
    }
})
export default ItemInfo;
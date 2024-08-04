import Typography from 'Atoms/Typography';
import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const TrendingProducts: React.FC<TrendingProductsNS.IProps> = ({
    trends,
    onSelectTrend
}) => {

    const firstRow = trends.slice(0, 3);
    const second = trends.slice(3, 10);
    const third = trends.slice(10, 15);

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                gap: 10
            }}>
                {
                    firstRow.map((item) => {
                        return (
                            <View style={{
                                borderWidth: 1,
                                borderColor: colorValueAndCodeMapper.Gallery,
                                flexDirection: 'row',
                                height: heightPercentageToDP('5.321%'),
                                alignItems: 'center',
                                paddingHorizontal: 3,
                                gap: 10
                            }}>
                                <Typography text={item.lable} sizeAndWeight='12-500' color='MineShaft' />
                                <Image source={{
                                    uri: item.image
                                }}
                                    height={heightPercentageToDP('4.7%')}
                                    width={widthPercentageToDP('9.44%')}
                                />
                            </View>
                        )
                    })
                }
            </View>
            <View style={{
               flexDirection: 'row',
               gap: 10,
               marginTop : 10
            }}>
                {
                    second.map((item) => {
                        return (
                            <View style={{
                                borderWidth: 1,
                                borderColor: colorValueAndCodeMapper.Gallery,
                                flexDirection: 'row',
                                height: heightPercentageToDP('5.321%'),
                                alignItems: 'center',
                                paddingHorizontal: 3,
                                gap: 10
                            }}>
                                <Typography text={item.lable} sizeAndWeight='12-500' color='MineShaft' />
                                <Image source={{
                                    uri: item.image
                                }}
                                    height={heightPercentageToDP('4.7%')}
                                    width={widthPercentageToDP('9.44%')}
                                />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default TrendingProducts;
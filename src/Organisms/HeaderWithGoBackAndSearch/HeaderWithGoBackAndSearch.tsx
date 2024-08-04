import BackArrow from 'Assets/SvgIcons/BackArrow';
import Search from 'Assets/SvgIcons/Search';
import Typography from 'Atoms/Typography';
import HeaderWiththreeNodes from 'Molecules/HeaderWithThreeNodes';
import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const HeaderWithGoBackAndSearch: React.FC<HeaderWithGoBackAndSearchNS.IProps> = ({
    title,
    titleColor = 'MineShaft',
    titleSizeNWeight = '16-700',
    description,
    descriptionColor = 'MineShaft',
    descriptionSizeNWeight = '12-400',
    onGoBack,
    onSearch
}) => {
    return (
        <HeaderWiththreeNodes
           
            backgroundColor={colorValueAndCodeMapper.Alabaster}
            firstNode={
                <Pressable
                
                    style={{
                        width: widthPercentageToDP('6.38%'),
                        height: heightPercentageToDP('3.59%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={onGoBack}>
                    <BackArrow
                        width={widthPercentageToDP('6.38%')}
                        height={heightPercentageToDP('3.59%')}
                    />
                </Pressable>
            }
            secondNode={
                <View style={{
                    width: widthPercentageToDP('73.33%'),
                    height: heightPercentageToDP('6.09%'),
                    flexDirection: 'column',
                    gap: heightPercentageToDP('0.625%'),
                }}>
                    <Typography text={title} sizeAndWeight={titleSizeNWeight} color={titleColor} />

                    <Typography text={description} sizeAndWeight={descriptionSizeNWeight} color={descriptionColor} />
                </View>
            }
            thirdNode={
                <Pressable onPress={onSearch}>
                    <Search
                        width={widthPercentageToDP('4.88%')}
                        height={heightPercentageToDP('2.74%')}
                    />
                </Pressable>
            }
        />
    )
}
export default HeaderWithGoBackAndSearch;
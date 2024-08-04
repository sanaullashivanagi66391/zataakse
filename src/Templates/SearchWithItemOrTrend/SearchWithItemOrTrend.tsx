import BackArrow from 'Assets/SvgIcons/BackArrow';
import Search from 'Assets/SvgIcons/Search';
import Typography from 'Atoms/Typography';
import RelatedProductItems from 'Organisms/RelatedProductItems';
import TrendingProducts from 'Organisms/TrendingProducts';
import * as React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const SearchWithItemOrTrend: React.FC<SearchWithItemOrTrendNS.IProps> = ({
    trends,
    data,
    onGoBack,
    onSearchChange,
    searchValue,
    onSearch,
    onSelectTrend,

}) => {

    const input = React.useRef(null);

    React.useEffect( () =>{
        //@ts-ignore
          input?.current?.focus?.();
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Pressable onPress={onGoBack}>
                    <BackArrow width={widthPercentageToDP('5.5%')} height={heightPercentageToDP('3.15%')} />
                </Pressable>
                <TextInput
                    ref={input}
                    onChangeText={onSearchChange}
                    value={searchValue}
                    placeholder='Search to add products'
                    style={styles.input}
                />
                <Pressable onPress={onSearch}>
                    <Search />
                </Pressable>
            </View>

            <View style={{
                marginTop: 16,
                // paddingHorizontal: widthPercentageToDP('5%'),
            }}>
                {
                    data.length > 0 ? (
                        <View >
                            <View style={{
                            height : heightPercentageToDP('21.71%')
                        }} >
                            <FlatList
                                data={data}
                               contentContainerStyle={{
                                alignItems : 'flex-start'
                               }}
                                ItemSeparatorComponent={() => (
                                    <View style={{
                                        marginTop: 10
                                    }} />
                                )}
                                renderItem={(item) => {
                                    return (
                                        <View style={{
                                            flexDirection: 'row',
                                            gap: 6,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                height: 24,
                                                width: 30,
                                                backgroundColor: colorValueAndCodeMapper.Alabaster,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 5,
                                                borderWidth: 1,
                                                borderColor : colorValueAndCodeMapper.Gallery
                                            }}>
                                                <Image source={{ uri: item.item.image }}
                                                    height={20}
                                                    width={25}
                                                />


                                            </View>

                                            <View style={{
                                                width: item.item.lable.length > 30 ? widthPercentageToDP('68.1%') : 'auto'
                                            }}>
                                                <Typography
                                                    text={`${item.item.lable.slice(0, 30)}...`}
                                                    sizeAndWeight='12-400'

                                                />
                                            </View>
                                            <Typography
                                                text={`-${item.item.price}g`}
                                                sizeAndWeight='12-400'

                                            />
                                        </View>
                                    )
                                }}
                            />
                            </View>
                            <View style={{
                                marginTop:16
                            }}>
                            <RelatedProductItems
                                items={data}
                                onItemSelect={() => { }} />
                                </View>
                        </View>

                    ) : (<TrendingProducts
                        trends={trends}
                        onSelectTrend={() => { }} />)
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: heightPercentageToDP('6.25%'),
        width: widthPercentageToDP('68.33%'),
        marginLeft: widthPercentageToDP('1.94%'),
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colorValueAndCodeMapper.Alabaster
    },
    searchBar: {
        width: widthPercentageToDP('90%'),
        height: heightPercentageToDP('6.25%'),
        marginLeft: widthPercentageToDP('5'),
        marginTop: heightPercentageToDP('3.125%'),
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        paddingHorizontal: widthPercentageToDP('4.44%'),
        paddingVertical: heightPercentageToDP('1.56%'),
        // elevation : 1
    }
})
export default SearchWithItemOrTrend;
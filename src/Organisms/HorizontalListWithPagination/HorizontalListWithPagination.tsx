
import ListPagination from 'Molecules/listPagination';
import ProductItemInfo from 'Molecules/ProductItemInfo';
import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP } from 'Utils/Helpers';

const { width } = Dimensions.get('window');

const HorizontalListWithPagination : React.FC<HorizontalListWithPaginationNS.IProps> = ({
    onSelectItem,
    data
}) => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  const onScroll = (event : any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  const renderCategory = ({ item } : {item : any}) => <ProductItemInfo title={item.title} image={item.image} id={item.id} />;

  const getDataForPage = (pageIndex : any) => {
    const startIndex = pageIndex * 8;
    const endIndex = startIndex + 8;
    return data.slice(startIndex, endIndex);
  };

  const renderPage = ({ item } : {item : any}) => (
    <View style={styles.page}>
      <FlatList
        data={getDataForPage(item)}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={4}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={Array.from({ length: Math.ceil(data.length / 8) }, (_, i) => i)}
        renderItem={renderPage}
        keyExtractor={(item) => item.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.paginationContainer}>
      <ListPagination index={index} listSize={data.length} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height : 200, width : '100%',
    paddingVertical: 20,
    // alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  page: {
    width: width,
    alignItems: 'center',
  },
 
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  paginationContainer:{
    marginTop : heightPercentageToDP('3%'),
    alignItems : 'center',
    width : '100%'
  }
});

export default HorizontalListWithPagination;
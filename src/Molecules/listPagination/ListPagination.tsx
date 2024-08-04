import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';


const ListPagination = ({ index, listSize }: { index: any, listSize: number }) => {
    const pages = Math.ceil(listSize / 8);
    return (
        <View style={styles.pagination}>
            {Array.from({ length: pages }).map((_, i) => (
                <View key={i} style={[styles.dot, { backgroundColor: i === index ? '#FFBE0B' : '#E2DFDF'}]} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
    },

    dot: {
        height: 8,
        width: 8,
        borderRadius: 10,
        marginHorizontal: 4,
    },
})

export default ListPagination;
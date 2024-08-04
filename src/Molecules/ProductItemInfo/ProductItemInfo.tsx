import Typography from 'Atoms/Typography';
import * as React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const { width } = Dimensions.get('window');

const ProductItemInfo = ({ title, image , id } : {title : string , image :string , id : string}) => {
    return (
    <TouchableOpacity style={styles.item}>
      <View style={{
        width : widthPercentageToDP('21.14%'),
        height : heightPercentageToDP('11.89%'),
        borderWidth:1,
        borderRadius : 12,
        borderColor : '#F1EFEF',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FFFFFF',
         marginBottom:  heightPercentageToDP('1.875%')
      }}>
        {
          image !== '' ? (<Image source={{
            uri : image
        }} style={styles.image} />) : <Typography text={'View All'} sizeAndWeight='10-500' color='MineShaft' />
        }
      
      </View>
      {
        image !== '' ? <Typography text={title} sizeAndWeight='10-500' /> : <Typography text={""} sizeAndWeight='10-500' /> 
      }
      
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 4 - 20,
        marginHorizontal: 10,
        marginVertical: 10,
      },
       
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
})
export default ProductItemInfo
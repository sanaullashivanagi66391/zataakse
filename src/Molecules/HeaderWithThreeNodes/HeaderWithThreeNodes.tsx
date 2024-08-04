import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

/**
 * this component used to render three nodes and align them equaly between the given width
 * @param param0 takes three Nodes
 * @returns component with three nodes
 */
const HeaderWiththreeNodes: React.FC<HeaderWithThreeNodesNS.IProps> = ({
   height = '10.93%',
   backgroundColor,
   borderRadius = 0,
   firstNode = (<View></View>),
   secondNode = (<View></View>),
   thirdNode = (<View></View>),
   paddingLeftAndRight = widthPercentageToDP('4.444%'),
   borderWidth = 0,
   borderColor = colorValueAndCodeMapper.Alabaster,
}) => {
   return (
      <View style={[{
         display: 'flex',
         height: heightPercentageToDP(height),
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         backgroundColor,
         borderRadius: borderRadius,
         paddingHorizontal:  paddingLeftAndRight,
         borderWidth ,
         borderColor,
         elevation:1,
         borderBottomLeftRadius : 20,
         borderBottomRightRadius : 20
      }, styles.shadowStyle]}>

         <View style={[styles.flexOne]}>
            {
               firstNode
            }
         </View>
         <View style={[styles.flexOne, styles.secondNode]}>
            {
               secondNode
            }
         </View>
         <View style={[styles.flexOne, styles.thirdNode]}>
            {
               thirdNode
            }
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   shadowStyle: {
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
   },
   flexOne: {
      alignItems : 'flex-start'
   },
   secondNode: {
      alignItems: 'center',
   },
   thirdNode: {
      alignItems: 'flex-end',
   },
})
export default HeaderWiththreeNodes;
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Typography from 'Atoms/Typography';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';
import MarginWrapper from 'Atoms/MarginWrapper';
import { colorValueAndCodeMapper } from 'Utils/Colors';


const AnimatedNavButton: React.FC<AnimatedNavButtonNS.IProps> = ({
    icon,
    title,
    isFocused,
    height  
}) => {
    return (
        <View style={[styles.container,{
            backgroundColor  : isFocused ? colorValueAndCodeMapper.Gallery : colorValueAndCodeMapper.Alabaster
        }]}>
            {
                icon
            }
             <Typography text={title} sizeAndWeight='12-400' />
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width : widthPercentageToDP('20.833%'),
        height:heightPercentageToDP('7.81%'),
        alignItems : 'center',
        borderRadius : 8,
        backgroundColor  :"hotpink",
        justifyContent : 'center',
    }
})
export default AnimatedNavButton;
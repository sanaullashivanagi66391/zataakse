import Typography from 'Atoms/Typography';
import * as React from 'react';
import { View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { colorValueAndCodeMapper } from 'Utils/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'Utils/Helpers';

const ButtonWithImageNTitle: React.FC<ButtonWithImageNTitleNS.Iprops> = ({
    icon,
    label,
    onPress,
    id,
    flexDirection = 'column'
}) => {
    return (
        <TouchableHighlight
            style={[styles.container, {
                flexDirection
            }]}
            key={id}
            onPress={() => onPress(id)}>
            <View style={{ backgroundColor: 'white' , alignItems : 'center'}}>
                <View style={{
                   height : heightPercentageToDP('11.89%'),
                   width : widthPercentageToDP('21.14%'),
                    marginBottom : heightPercentageToDP('0.91%'),
                    borderColor : colorValueAndCodeMapper.Gallery,
                    borderWidth: 1,
                    borderRadius : 12,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}>
                    <Image
                        source={{ uri: icon }}
                        height={heightPercentageToDP('10%')}
                        width={widthPercentageToDP('17.77%')}
                    />
                </View>
                <View style={{
                    width: widthPercentageToDP('18.91%'),
                    height: heightPercentageToDP('4.69%'),
                }}>
                <Typography text={label} sizeAndWeight='10-500' textAlign='center' />
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})
export default ButtonWithImageNTitle;
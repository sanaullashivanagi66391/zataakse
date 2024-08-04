import React from 'react';
import {StyleSheet, Text,} from 'react-native';

import { colorValueAndCodeMapper } from 'Utils/Colors';
import { availableFonts } from 'Utils/Fonts';
import { RFValue } from 'Utils/Helpers';

/**
 * gives the necessary font family and font size
 * to the Text component based on the props and returns Text Component
 * @returns Text component with the given text
 */
const Typography: React.FunctionComponent<TypographyNS.IProps> = ({
  sizeAndWeight,
  color = 'MineShaft',
  text,
  width = 'auto',
  textDecorationLines ='none',
  opacity = 1,
  textAlign = undefined
}) => {
  const sizeWeightAndStylesMapper: TypographyNS.ISizeWeightAndStylesMapper = {
    '15-400': styles.fontSizeFiftenFourOO,
    '12-400': styles.fontSizeTwelveFourOO,
    '12-500': styles.fontSizeTwelveFiveOO,
    '17-700': styles.fontSizeSeventeenSevenOO,
    '22-700': styles.fontSizeTwentyTwoSevenOO,
    '20-400': styles.fontSizeTwentyFourOO,
    '18-400': styles.fontSizeEighteenFourOO,
    '17-400': styles.fontSizeSeventeenFourOO,
    '14-500': styles.fontSizeFourteenFiveOO,
    '14-400': styles.fontSizeFourteenFourOO,
    '24-500': styles.fontSizeTwentyFourOO,
    '16-500': styles.fontSizeSixteenFiveOO,
    '14-600': styles.fontSizeFourteenSixOO,
    '12-300': styles.fontSizeTwelveThreeOO,
    '10-500': styles.fontSizeTenFiveOO,
    '20-500' : styles.fontSizeTwentyFiveOO,
    '10-400' : styles.fontSizeTenFourOO,
    '24-600' : styles.fontSizeTwentyFourSixOO,
    '14-700' : styles.fontSizeFourTeenSevenOO,
    '16-700' : styles.fontSizeSixTeenSevenOO,
    '12-700' : styles.fontSizeTwelveSevenOO,
    '16-400' : styles.fontSizeSixtenFourOO,
    '9-500' : styles.fontSizeNineFiveOO
  };

  return (
    <Text
      style={[
        sizeWeightAndStylesMapper[sizeAndWeight],
        {
          color: colorValueAndCodeMapper[color],
          textDecorationLine : textDecorationLines,
          opacity ,
          width,
          textAlign,
        },
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
 
   fontSizeFiftenFourOO :{
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(15),
    fontWeight : "400"
   },
   fontSizeTwelveFourOO :{
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(12),
    fontWeight : "400"
   },
   fontSizeTwelveFiveOO :{
    fontFamily : availableFonts.InterSemiBold,
    fontSize : RFValue(12),
    fontWeight : "500"
   },
   fontSizeSeventeenSevenOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(17),
    fontWeight : "700"
   },
   fontSizeSeventeenFourOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(17),
    fontWeight : "400"
   },
   fontSizeTwentyTwoSevenOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(22),
    fontWeight : "700"
   },
   fontSizeTwentyFourOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(20),
    fontWeight : "400"
   },
   fontSizeEighteenFourOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(18),
    fontWeight : "400"
   },
   fontSizeFourteenFiveOO : {
    fontFamily : availableFonts.InterBold,
    fontSize : RFValue(14),
    fontWeight : "500"
   },
   fontSizeFourteenFourOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(14),
    fontWeight : "400"
   },
   fontSizeSixteenFiveOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(16),
    fontWeight : "500"
   },
   fontSizeFourteenSixOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(14),
    fontWeight : "600"
   },
   fontSizeTwelveThreeOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(12),
    fontWeight : "300"
   },
   fontSizeTenFiveOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(10),
    fontWeight : "500"
   },
   fontSizeTwentyFiveOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(20),
    fontWeight : "500"
   },
   fontSizeTenFourOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(10),
    fontWeight : "400"
   },
   fontSizeTwentyFourSixOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(24),
    fontWeight : "600"
   },
   fontSizeFourTeenSevenOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(14),
    fontWeight : "700"
   },
   fontSizeSixTeenSevenOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(16),
    fontWeight : "700"
   },
   fontSizeTwelveSevenOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(12),
    fontWeight : "700"
   },
   fontSizeSixtenFourOO : {
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(16),
    fontWeight : "400"
   },
   fontSizeNineFiveOO :{
    fontFamily : availableFonts.InterRegular,
    fontSize : RFValue(9),
    fontWeight : "500"
   }

  
});

export default Typography;

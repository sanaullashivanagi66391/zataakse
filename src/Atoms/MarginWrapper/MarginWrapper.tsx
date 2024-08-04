import React from 'react';
import {View} from 'react-native';

/**
 * it wraps the given children inside a container,
 * to which given margins will get applied
 * @returns container with given children
 */
const MarginWrapper: React.FunctionComponent<MarginWrapperNS.IProps> = ({
  marginBottom = 0,
  marginTop = 0,
  marginRight = 0,
  marginLeft = 0,
  children = <View></View>
}) => {
  return <View style={{marginLeft, marginRight, marginBottom, marginTop}} >
    {children}
  </View>
};

export default MarginWrapper;

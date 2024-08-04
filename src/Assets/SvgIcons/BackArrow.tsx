import * as React from 'react';

import Svg, {Path } from "react-native-svg"
import { colorValueAndCodeMapper } from 'Utils/Colors';

const BackArrow: React.FC<TransformedIconsNS.ICommonIconProps> = ({
  height = 12,
  width = 18,
  fill = colorValueAndCodeMapper.MineShaft
}) => {
  return (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
        d="M5.031 10.781h14.375a.719.719 0 010 1.438H5.031a.719.719 0 010-1.438z"
        fill={fill}
      />
      <Path
        d="M5.329 11.5l5.961 5.96a.72.72 0 11-1.018 1.017L3.804 12.01a.72.72 0 010-1.018l6.468-6.469A.72.72 0 1111.29 5.54L5.33 11.5z"
        fill={fill}
      />
  </Svg>
  )
}

export default BackArrow;
import * as React from 'react';

import Svg, { G, Mask, Path } from "react-native-svg"
import { colorValueAndCodeMapper } from 'Utils/Colors';

const OrderBottomBar: React.FC<TransformedIconsNS.ICommonIconProps> = ({
  height = 22,
  width = 22,
  fill = colorValueAndCodeMapper.Scorpion
}) => {
  return (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha"
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={22}
      height={22}
    >
      <Path fill="#D9D9D9" d="M0 0H22V22H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M3.667 16.5V6.508l-1.421-3.07a.857.857 0 01-.023-.7.912.912 0 01.481-.515.89.89 0 01.7-.034.87.87 0 01.515.47l1.764 3.804h10.634l1.764-3.805a.912.912 0 01.516-.48.805.805 0 01.699.045c.229.107.39.279.481.516a.858.858 0 01-.023.699l-1.42 3.07V16.5c0 .504-.18.936-.54 1.295-.358.359-.79.538-1.294.538h-11c-.504 0-.936-.18-1.295-.538a1.765 1.765 0 01-.538-1.295zm5.5-4.583h3.666c.26 0 .478-.088.653-.264A.887.887 0 0013.75 11a.887.887 0 00-.264-.653.887.887 0 00-.653-.264H9.167a.887.887 0 00-.653.264.887.887 0 00-.264.653c0 .26.088.477.264.653a.887.887 0 00.653.264zM5.5 16.5h11V8.296h-11V16.5z"
        fill="#6B6062"
      />
    </G>
  </Svg>
  )
}

export default OrderBottomBar;
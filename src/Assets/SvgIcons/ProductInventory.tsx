import * as React from 'react';

import Svg, { Path } from "react-native-svg"
import { colorValueAndCodeMapper } from 'Utils/Colors';

const ProductInventory: React.FC<TransformedIconsNS.ICommonIconProps> = ({
  height = 19,
  width = 20,
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
      <Path
        d="M3.083 19.167c-.504 0-.935-.18-1.294-.539a1.765 1.765 0 01-.539-1.295V6.998a2.013 2.013 0 01-.665-.653 1.707 1.707 0 01-.252-.928v-2.75c0-.504.18-.936.539-1.295.359-.36.79-.539 1.295-.539h14.666c.505 0 .936.18 1.295.539.36.359.539.79.539 1.295v2.75c0 .351-.084.66-.252.928-.168.267-.39.485-.665.653v10.335c0 .505-.18.936-.539 1.295-.359.36-.79.539-1.294.539H3.083zm-.916-13.75h14.666v-2.75H2.167v2.75zm5.5 6.416h3.666c.26 0 .478-.088.653-.263a.887.887 0 00.264-.653.887.887 0 00-.264-.653.887.887 0 00-.653-.264H7.667a.887.887 0 00-.653.264.887.887 0 00-.264.653c0 .26.088.477.264.653a.887.887 0 00.653.263z"
        fill="#6B6062"
      />
  </Svg>
  )
}

export default ProductInventory;
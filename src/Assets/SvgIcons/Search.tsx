import * as React from 'react';
import Svg, { Path } from "react-native-svg"

import { colorValueAndCodeMapper } from 'Utils/Colors';

const Search: React.FC<TransformedIconsNS.ICommonIconProps> = ({
    height = 16,
    width = 16,
    fill = colorValueAndCodeMapper.MineShaft
}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            //@ts-ignore
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M11.435 10.063h-.723l-.256-.247a5.92 5.92 0 001.437-3.87 5.946 5.946 0 10-5.947 5.947 5.92 5.92 0 003.87-1.437l.247.256v.723L14.637 16 16 14.637l-4.565-4.574zm-5.489 0A4.111 4.111 0 011.83 5.946 4.111 4.111 0 015.946 1.83a4.111 4.111 0 014.117 4.116 4.111 4.111 0 01-4.117 4.117z"
                fill={fill}
            />
        </Svg>
    )
}

export default Search;
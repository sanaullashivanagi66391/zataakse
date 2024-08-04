declare namespace TypographyNS {
  /**
   * allowed  size and weight values
   */
  type AllowedSizeAndWeight =
    | '15-400'
    | '12-400'
    | '12-500'
    | '12-700'
    | '14-500'
    | '14-400'
    | '17-400'
    | '17-700'
    | '22-700'
    | '20-400'
    | '20-500'
    | '18-400'
    | '24-500'
    | '16-500'
    | '16-400'
    | '14-600'
    | '12-300'
    | '10-500'
    | '10-400'
    | '24-600'
    | '14-700'
    | '16-700'
    | '9-500'

  interface IProps {
    /**
     * specifies what should be the font size and weight
     */
    sizeAndWeight: AllowedSizeAndWeight;
    /**
     * color of the text, by default it will be mirage black
     */
    color?: UtilNS.AllowedColors;
    /**
     * text to be rendered.
     */
    text: string | number;
    /**
     * width to render text , default it is 'auto
     */
    width ?: import('react-native').TextStyle['width'];
    /**
     * used to enable text underline, be default it is  none
     */
    textDecorationLines?: textDecorationLinesTypes
    /**
     * used to set the text opacity, be default it is 1 
     */
    opacity?: number
    /**
     * used to align text , default it is undefined
     */
    textAlign?: textAlign
  }
  type textAlign = 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  type textDecorationLinesTypes = 'none' | 'underline' | 'line-through' | 'underline line-through';

  /**
   * specifies what is the style name associated
   * for different size and weight values which are defined in typography
   */
  type ISizeWeightAndStylesMapper = Record<
    AllowedSizeAndWeight,
    import('react-native').TextStyle
  >;



  /**
   * props used to Scrollable Text , Which Helps To Scroll If Width Provided
   */
  interface IScrollableTextProps extends TypographyNS.IProps {
    /**
     * width
     */
  }

}

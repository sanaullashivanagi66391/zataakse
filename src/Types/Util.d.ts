declare namespace UtilNS {
  /**
   * allowed colors for whole application
   */
  type AllowedColors =
   "MineShaft"
   | "Scorpion"
   | "Gallery"
   | "Alabaster"
   | "Lima"

  /**
   * list of allowed colors
   */
  interface IAllowedColors {
    MineShaft : "#2A2A2A";
    Scorpion : "#6B6062";
    Gallery : "#F1EFEF";
    Alabaster : "#FCFCFC";
    Lima : "#80B918"
  }

  /**
   * available font families
   */
  interface IAvailableFontFamilies {
    InterBlack: 'Inter-Black';
    InterBold: 'Inter-Bold';
    InterExtraBold: 'Inter-ExtraBold';
    InterExtraLight: 'Inter-ExtraLight';
    InterLight: 'Inter-Light';
    InterMedium: 'Inter-Medium';
    InterRegular: 'Inter-Regular';
    InterSemiBold: 'Inter-SemiBold';
    InterThin: 'Inter-Thin';
  }

  /**
   * specifies the color codes mapped to different color names
   */
  type ColorAndCodeMapper = IAllowedColors;
}

declare namespace HeaderWithGoBackAndSearchNS {
    interface IProps  {
        /**
         * used to handle go back arrow event
         */
        onGoBack : () => void;

        /**
         * header title
         */
        title : string;
        
        /**
         * title text size and weight
         */
        titleSizeNWeight ?: TypographyNS.AllowedSizeAndWeight;

        /**
         * title color
         */
        titleColor ?: UtilNS.AllowedColors;

        /**
         * description
         */
        description : string;

        /**
         * description text size and weight
         */
        descriptionSizeNWeight ?: TypographyNS.AllowedSizeAndWeight;

        /**
         * description color
         */
        descriptionColor ?: UtilNS.AllowedColors;

        /**
         * callback to handle search event
         */
        onSearch: () => void;

    }
}
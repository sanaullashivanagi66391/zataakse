declare namespace SelectedProductCategoryNS {
    interface IProps extends HorizontalListWithPaginationNS.IProps  {

        /**
         * to habdle back
         */
        onPressBack : () => void;
        /**
         * onSearch event handler
         */
        onSearch : () => void;
        /**
         * item list with info
         */
        relatedItems : RelatedProductItemsNS.IproductItem[]
    }
}
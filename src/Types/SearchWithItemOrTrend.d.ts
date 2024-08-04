declare namespace SearchWithItemOrTrendNS {
    interface IProps extends TrendingProductsNS.IProps {
        /**
         * back press event handler
         */
        onGoBack : () => void;
        /**
         * search event
         */
        onSearch : () => void;
        /**
         * search word
         
         * */
        searchValue : string;
        /**
         * used to search items on every charecter
         */
        onSearchChange : (param:string) => void;
        // /**
        //  * trends suggestions
        //  */
        // trendsList : ITrendList[];

        /**
         * searched Data
         */
        data : RelatedProductItemsNS.IproductItem[];

        // /**
        //  * to hadndle selected item event
        //  */
        // onSelectItem : () => void;


    }

    interface ITrendList {
        /**
         * unique id
         */
        id : string;
        /**
         * label
         */
        label : string;

        /**
         * icon
         */
        icon:string;
    }

    interface IState {

        searchWithItemOrTrendState : ISearchWithItemOrTrendState;
        
    }

    interface ISearchWithItemOrTrendState {
        searchValue : string;
        
        trends : [] | any;

        isLoading : boolean;
        
        hasError : boolean;

        data : [] | any;
    }
}
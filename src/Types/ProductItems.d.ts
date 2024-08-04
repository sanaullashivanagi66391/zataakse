declare namespace AllProductsNS {

    /**
     * all product info , including loading and error properties
     */

    interface IState { 
       /**
        * collection of product items info
        */
        data : IProductItemsInfo[];

        /**
         * catalog 
         */

        /**
         * to check if the state is loading
         */
        isLoading : boolean;

        /**
         * to render error whil fetching product info
         */
        hasError : boolean;
    }

    /**
     * product catalog item info
     */
    interface IProductCatalog {
        /**
         * catalog lable
         */
        label : string;
        /**
         * image
         */
        image : React.ReactNode;
    }
    /**
     * used to store all fethced product info in product landing Page
     */
    interface IProductItemsInfo {
        /**
         * name od the product
         */
        label : string;
        
        /**
         * description of product
         */
        description: string;

        /**
         * weight of the product
         */
        weight : string;

        /**
         * price 
         */

        price : number;
    }
}

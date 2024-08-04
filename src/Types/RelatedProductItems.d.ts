declare namespace RelatedProductItemsNS {

    interface IProps {
        /**
         * list of items
         */
        items : IproductItem[];

        /**
         * on item selection event
         */
        onItemSelect : (param : any) => void;
    }

    interface IproductItem {
        /**
         * id
         */
        id: string | any;
        
        /**
         * label 
         */
        lable: string;

        /**
         * price
         */
        price : string;
        /**
         * weight
         */
        weight : string;
        /**
         * image
         */
        image: string;
        
        /**
         * is Selected status
         */
        isSelected ? : boolean;
    }
}
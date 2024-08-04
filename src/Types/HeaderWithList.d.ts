declare namespace HeaderWithListNS {

    interface IProps {
        /**
         * list section name
         */
        title : string;

        /**
         * product catalog list
         */

        list : IProductCatalog[];

        /**
         * used to handle onPress Of Item
         */
        onPressOfItem : (id:any) => void;
    }

    interface IProductCatalog {

        /**
         * label
         */
        label : string;

        /**
         * icon
         */
        icon ? : any

        /**
         * id 
         */
        id : number;
    }
}
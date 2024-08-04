declare namespace HorizontalListWithPaginationNS {

    interface IProps {
        
        data : IListData[];

        /**
         * used to handle selected item event
         */
        onSelectItem : (param : any) => void
    }

    interface IListData {
        /**
         * id
         */
        id : string;
        /**
         * title
         */
        title : string;

        /**
         * image
         */
        image : string
    }
}
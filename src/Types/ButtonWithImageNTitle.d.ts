declare namespace ButtonWithImageNTitleNS {

    interface Iprops { 
         /**
          * used to product icon
          */
         icon : string;

         /**
          * product name
          */
         label : string;

         /**
          * used to handle item Press event
          */
         onPress: (id:number) => void; 
         
         /**
          * product item id
          */
         id:number;

         /**
          * used to render icon and label in provided direction , default it is colume here
          */
         flexDirection ? : import('react-native').FlexStyle['flexDirection'];
    }
}
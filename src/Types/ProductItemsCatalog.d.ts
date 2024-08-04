declare namespace ProductItemsCatalogNS {
    interface IProps extends    Omit<HeaderWithGoBackAndSearchNS.IProps , 'title' | 'titleSizeNWeight' | 'titleColor' | 'description' | 'descriptionSizeNWeight' | 'descriptionColor'>{
      
        /**
         * used to render all product catelog
         */

        snacksAndDrinks : ISnacksAndDrinks;

        /**
         * beauty care
         */
        beautyCareAndPersonal : IBeautyCareAndPersonal

        /**
         * used to handle events on catelog click
         */

        onPressOfItem : (param: any) => void;

    }

    interface IBeautyCareAndPersonal extends HeaderWithListNS.IProps {

    }

    interface ISnacksAndDrinks  extends HeaderWithListNS.IProps {


    }
}
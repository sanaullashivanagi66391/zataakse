declare namespace AnimatedNavButtonNS {
    interface IProps {
        /**
         * used to render Icon
         */
        icon : React.ReactNode;
        /**
         * used to render nav bar button title
         */
        title :string;
        /**
         * used to render if button is focued
         */
        isFocused : boolean;
        /**
         * used to put height to home  or dash board button 
         */
        height  ? : import('react-native').FlexStyle['height'] | undefined; 
    }
}
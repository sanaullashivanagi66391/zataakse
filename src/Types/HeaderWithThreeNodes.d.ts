declare namespace HeaderWithThreeNodesNS {
    interface IProps{
        height? :  import('react-native').ViewStyle['height'];

        
        backgroundColor : import('react-native').ViewStyle['backgroundColor'] | string;
        /**
         * first node to render
         */
        firstNode ?: React.ReactNode;
        /**
         * second node to be render
         */ 
        secondNode ?: React.ReactNode;
        /**
         * third node to be rendered
         */
        thirdNode ?: React.ReactNode;
        /**
         * horizental padding in the header
         */
        paddingLeftAndRight? : number;
        /**
         * border Radius of the Header, default is 0
         */
        borderRadius ? : import('react-native').ViewStyle['borderRadius'];
       /**
         * border width of the Header, default is 0
         */
       borderWidth ? : import('react-native').ViewStyle['borderWidth'];
         /**
         * border color of the Header, default is white
         */
       borderColor ? : import('react-native').ViewStyle['borderColor'];
       
    }
}
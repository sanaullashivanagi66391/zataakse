declare namespace MarginWrapperNS {
  interface IProps {
    /**
     * what should be the margin left
     * by default it will be zero
     */
    marginLeft?: import('react-native').ViewStyle['marginLeft'];
    /**
     * margin right by default it will be zero
     */
    marginRight?: import('react-native').ViewStyle['marginRight'];
    /**
     * margin top by default it will be zero
     */
    marginTop?: import('react-native').ViewStyle['marginTop'];
    /**
     * margin bottom by default it will be zero
     */
    marginBottom?: import('react-native').ViewStyle['marginBottom'];
    /**
     * to render the children
     */
    children? : React.ReactNode; 
  }
}

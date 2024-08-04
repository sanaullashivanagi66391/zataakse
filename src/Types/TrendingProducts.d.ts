declare namespace TrendingProductsNS {
   interface IProps {
     /**
     * trending Items List
     */
     trends : RelatedProductItemsNS.IproductItem[];
     /**
      * callback to handle selected trends
      */
     onSelectTrend : (param:string) => void
   }

}
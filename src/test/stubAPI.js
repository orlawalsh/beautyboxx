import _ from 'lodash';


var products = [
    {
        "id": 1,
        "name": "Beauty Blender",
        "price": 15,
        "review": "Makes makeup super easy to apply and blend",
        "rating": 3
    },
    
    {
       "id": 2,
       "name": "Sleek Highlight Pallette",
        "price": 12.95,
        "review": "Yassssss I'm glowing",
        "rating": 5
    },
    
    {
         "id": 3,
         "name": "Inglot HD Foundation",
        "price": 33,
        "review": "Flawless finish",
        "rating": 3.5
    },
    
    {
        "id": 4,
        "name": "Real Techniques Eyebrushes",
        "price": 25.99,
        "review": "Cheaper brushes available that could achieve the same results",
        "rating": 2.5
    },
        "id": 5,
        "name": "Real Techniques Facebrushes",
        "price": 27.99,
        "review": "Cheaper brushes available that could achieve the same results",
        "rating": 2
  ] ; 

var stubAPI = {
     add : function(n,p,r,a) {
      var len = products.length ;
      var newL_len = products.push({
         name: n, price: p, review: r, rating: a }) ;
      return newL_len > len ;
   },
   delete : function(k) {
       var elements = _.remove(products, 
           function(product) {
                 return product.name === k;
              });
       return elements; 
   },
   getAll : function() {
       return products ;
   },
   update : function(key,n,p,r,a) {
      var index = _.findIndex(products, function(product) {
           return product.name === key;
        } );      
      if (index !== -1) {
         products.splice(index, 1, {name: n, price: p, review: r, rating: a});
         return true ;
        }
      return false ;
   }
  }
  export default stubAPI ;
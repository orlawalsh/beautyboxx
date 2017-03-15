import React from 'react';
    import api from './test/stubAPI';
    import  './App.css';
    import buttons from './config/buttonsConfig';

var ProductForm = React.createClass({
        getInitialState: function() {
           return { name: '', price: '', review: '', rating: ''};
       },
       handleNameChange: function(e) {
            this.setState({name: e.target.value});
       },
       handlePriceChange: function(e) {
           this.setState({price: e.target.value});
       },
       handleReviewChange: function(e) {
           this.setState({review: e.target.value});
       },
       handleRatingChange: function(e) {
           this.setState({rating: e.target.value});
       },
       handleSubmit: function(e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var price = this.state.price.trim();
        var review = this.state.review.trim();
        var rating = this.state.rating.trim();
        if (!name || !price || !review || !rating) {
          return;
        }
        this.props.addHandler(name,price,review,rating);
        this.setState({name: '', price: '', review: '', rating: ''});
        this.setState({status: ''});
       },  
       render: function(){
          return (
            
            <tr>
              <td>
              <input type="text" className="form-control" 
                     placeholder="Name"
                     value={this.state.name}
                     onChange={this.handleNameChange} />
              </td>
              <td>
              <input min="0.01" type="number" className="form-control"
                     placeholder="Price"
                     value={this.state.price}
                     onChange={this.handlePriceChange} />
              </td>
              <td>
              <input type="textarea" className="form-control" 
                     placeholder="Review"
                     value={this.state.review}
                     onChange={this.handleReviewChange} />
              </td>
                 <td>
              <input type="number" min="1" max="5" className="form-control" 
                     placeholder="Rating"
                     value={this.state.rating}
                     onChange={this.handleRatingChange} />
              
              </td>
              <td>
              <input type="button" className="btn btn-primary" value="Submit Review"
                       onClick={this.handleSubmit} />
              </td>
              <td>
              </td>
            </tr>
           
            )
        }
      });


    var ProductList = React.createClass({
          render: function(){
              var productRows = this.props.products.map(function(product){
                  return (
                   <Product key={product.id}  product={product} 
                       deleteHandler={this.props.deleteHandler} 
                       updateHandler={this.props.updateHandler} />
                    ) ;
                }.bind(this) );
              return (
                  <tbody >

                      <ProductForm
                           addHandler={this.props.addHandler}/>
                                                 {productRows}


                  </tbody>
                ) ;
            }
          });

    var ProductsTable = React.createClass({


    
    render: function(){
       

            var inStyle = {color: "blue"};
              return (
        
                                        
                <table className="table table-bordered">
<thead style={inStyle}>
                      <tr>
                      <th>Name of Product</th>
                      <th>Price</th>
                      <th>Review</th>
                      <th>Rating</th>
                      <th></th>
                      <th></th>
                      </tr>
                    </thead>
                      <ProductList products={this.props.products} 
                          deleteHandler={this.props.deleteHandler} 
                          addHandler={this.props.addHandler}
                           updateHandler={this.props.updateHandler}  />
                </table>
                // </div>
                );
          }
      });
    

   var ProductApp = React.createClass({

          getInitialState: function() {
           return { search: '', sort: 'name' } ;
         }, 
          
          deleteProduct : function(k) {
             api.delete(k);
             this.setState( {} ) ;
          },
          addProduct : function(n,p,r,a) {
             api.add(n,p,r,a) ;
             this.setState({});
          },
          updateProduct : function(key,n,p,r,a) {
              if (api.update(key,n,p,r,a) )  { 
                  this.setState({});  
              }             
          },  

          render: function(){
                    var products = api.getAll();

                    <div>
                       <div className="logo"></div>
                    <ProductsTable products={filteredList} 
                          deleteHandler={this.deleteProduct}
                          addHandler={this.addProduct} 
                          updateHandler={this.updateProduct}  />
                       
                    </div>

                    );
              }

          });

export default ProductApp;
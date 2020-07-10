import React from 'react';
import Products from './components/Products';
import Basket from './components/Basket';
import Total from './components/Total';

function App() {


  return (
    <div className="container">
         <div className="row">
              <div className="col">
								<h1>Products</h1>
								<Products/>
							</div>
							<div className="col">
								<h1>Basket</h1>
								<Basket/>
                <div className="row">
                  <h1  >Сума:</h1>
                  <Total/>
                </div>
							</div> 
         </div>
        
    </div>
  );
}

export default App;

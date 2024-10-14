import React, {useState} from 'react';
import Header from "./components/Header/Header.js";
import Footer from "./components/footer/footer.js";
// import { words } from "./words.js";
import data from './data.json';
import Products from './components/Products/Products.js';
function App() {

  const [products,setProducts] = useState(data);

  console.log(data)

  return (
    <div className="layout">
      
        
      <Header />


        <main>
          <div className="wrapper">
            <Products products={products}/>
            <div className="filter-wrapper">Filter</div>
          </div>
        </main>


        <Footer />
      </div>
  
  );
}

export default App;

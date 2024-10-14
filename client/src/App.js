import React, {useState} from 'react';
import Header from "./components/Header/Header.js";
import Footer from "./components/footer/footer.js";
import Filter from "./components/Filter/Filter.js";
// import { words } from "./words.js";
import data from './data.json';
import Products from './components/Products/Products.js';
function App() {

  const [products,setProducts] = useState(data);

  const [sort,setSort] = useState("");
  const [size,setSize] = useState("");



  const handleFilterBySize = (e) =>{
      setSize(e.target.value);
      if(e.target.value == "ALL"){
        setProducts(data)
      }else{
      let productsClone = [...products];
      let newProducts = productsClone.filter(p =>  
          p.sizes.indexOf(e.target.value) != -1)
          setProducts(newProducts)
      }

  }

  const handleFilterBySort = (e) =>{
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort( function(a,b) {
      if(order == 'lower'){
        return a.price - b.price;
      }else if(order == "highest"){
        return b.price - a.price;
      }else{
        return a.id < b.id ? 1 : -1;
      }
    } );
    setProducts(newProducts)

}

  return (
    <div className="layout">
      
        
      <Header />


        <main>
          <div className="wrapper">
            <Products products={products}/>
            <Filter 
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterBySort={handleFilterBySort}
            />
          </div>
        </main>


        <Footer/>
      </div>
  
  );
}

export default App;

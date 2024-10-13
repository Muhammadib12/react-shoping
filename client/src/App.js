import Header from "./components/Header/Header.js";
import Footer from "./components/footer/footer.js";
import { words } from "./words.js";

function App() {
  return (
    <div className="layout">
      
        
      <Header />


        <main>
          {words.content}
        </main>


        <Footer />
      </div>
  
  );
}

export default App;

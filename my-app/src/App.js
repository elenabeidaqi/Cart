//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
//components
import Store from './components/Store';
import {Route,Switch,Redirect} from 'react-router-dom'
import ProductsDetail from "./components/ProductsDetail";
import Navbar from "./components/shared/Navbar";
import Shopcart from './components/Shopcart'
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
      <Navbar/>
            <Switch>
              <Route path="/products/:id" component={ProductsDetail}/>
              <Route path="/products" component={Store}/>
              <Route path="/cart" component={Shopcart}/>
              <Redirect to="/products"/>
          </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;

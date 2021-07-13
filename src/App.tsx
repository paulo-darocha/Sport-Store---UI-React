import './App.css';
import Shop from './sportsStore/Shop';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './sportsStore/products/ProductDetail';
import CartDetail from './sportsStore/cart/CartDetail';
import Admin from './admin/Admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/category/:cat?" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={CartDetail} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/category/all" />
      </Switch>
    </div>
  );
}

export default App;

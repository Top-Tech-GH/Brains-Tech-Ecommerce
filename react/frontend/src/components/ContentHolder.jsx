// Libraries importation
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './Landing';
import NotFound from './404';
import Products from './AllProduct';
import ProductDetails from './ProductDetails';

// import SearchFilter from "./SearchFilter";

const Holder = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                <LandingPage />
                </Route>
                <Route exact path='/all-products'>
                <Products />
                </Route>
                <Route exact path='/product-details/:id'>
                <ProductDetails />
                </Route>
                <Route path='*'>
                <NotFound />
                </Route>
            </Switch>
        </Router>
     );
}
 
export default Holder;
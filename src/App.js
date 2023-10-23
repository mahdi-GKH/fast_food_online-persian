import Nav from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Notification from './components/cart_notification.jsx';
import MenuPage from './Pages/MenuPage';
import Footer from './components/footer';
import Cart from './Pages/CartPage';
import Protect from './components/Protect';
import Account from './Pages/Login';
import ProductPage from './Pages/ProductPage';

export default function App(){
    
    
    return(
        <>
                
                
                <Notification />
                <Nav />

                <Routes>
                    <Route  path='/' exact Component={Home}/>
                    <Route  path='/menu'  Component={MenuPage}/>
                    <Route  path='/login'  Component={Account}/>
                    <Route  path='/productpage/:id'  Component={ProductPage}/>

                    <Route  path='/cart'  element={ <Protect>
                            <Cart/>
                        </Protect>

                     }/>
                </Routes>

                <Footer />
            
        </>
    )
   
}

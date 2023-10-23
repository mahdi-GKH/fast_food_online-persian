import  ReactDOM  from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css';
import './Assests/Styles/style.css';


import { Provider } from 'react-redux';
import store from './components/menu';


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>

    <App />

</Provider>
</BrowserRouter>,
document.getElementById('root'));

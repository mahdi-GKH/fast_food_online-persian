

import { useDispatch  } from 'react-redux';
import Notification from './cart_notification';
import { addAction,notificationAction } from './data';
import { Link } from 'react-router-dom';


export default function Product(props){
    const cart  = useDispatch();
    return (
        <figure className="col-12 col-md-4 col-lg-2 figure  text-center p-5">
            <img src={props.img} className="figure-img w-75" alt="pizza" />
            <figcaption className="figure-caption text-center">
                <p className='h3 pt-3 text-light'>
                    <Link className='text-white text-decoration-none' to={`/productpage/${props.id}`}> {props.name}  </Link>
                    
                </p>
                <p className='h4 pt-3 text-light'>
                    {props.price}T
                </p>
                <button className="btn btn-warning mt-3" id={props.id} onClick={()=> {
                    cart(addAction(props.id));
                    cart(notificationAction(props.id));
                } }> افزودن به سبد خرید </button>
                
            </figcaption>
        </figure>
    )

}
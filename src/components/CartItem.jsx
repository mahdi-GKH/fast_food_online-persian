import { useDispatch,useSelector  } from 'react-redux';

import { addAction,removeAction } from './data';
import { Link } from 'react-router-dom';



export default function CartItem(props){
    const cart  = useDispatch();
    const list = useSelector(state => state.data.food);
    
    return(
        
        <div className="w-100 border  bg-dark text-white">
            <div className="row">
                <div className="col-12 col-lg-2 border-end">
                
                    <img src={props.img} alt="" className="img-fluid w-100 h-100" />
                </div>
                <div className="col-12 col-lg-6 d-flex border-end " >

                    <Link className='text-white text-decoration-none fs-3 align-self-center' to={`/productpage/${props.id}`}> {props.name}  </Link>
                
                </div>
                <div className="col-12 col-lg-2 border-end my-3 my-lg-0">

                    <div className="d-flex flex-row w-100 gap-4 justify-content-center h-100 align-items-center">
                        <button className='btn btn-info' onClick={()=> cart(addAction(props.id)) }> + </button>
                        <span className="text-center"> {list[props.index].number} </span>
                        <button className='btn btn-danger' onClick={()=> cart(removeAction(props.id)) }> - </button>
                    </div>

                </div>

                <div className="col-12 col-lg-2 d-flex " >

                    <p className="align-self-center mx-auto  fs-4 text-white">  {props.price}T </p>
                
                </div>
            
            </div>
        </div>
    )
}
import { addAction,removeAction } from '../components/data';
import { useDispatch,useSelector  } from 'react-redux';
import Product from '../components/product';
import { useState } from 'react';
import CartItem from '../components/CartItem';
const images = require.context('../Assests/Images', true);
const imageList = images.keys().map(image => images(image));


function FindPicture(name){
    var image = '';
    imageList.map(item => { if(item.includes(name)){image = item;} })
    return image;
}

export default function Cart(){

    const list = useSelector(state => state.data.food);
    const cart  = useDispatch();

    
    var num = 0;
    return( 
        

        <>
            

            <div id='maincart' className="container-lg pt-2 vh-100  overflow-auto">

                    
            
                    {
                         
                        list.map((item,index)=>{
                            if(item.number !== 0){
                                console.log(item);

                                
                                num = num + item.price * item.number;

                                return <CartItem img={FindPicture(item.id)} name={item.name} price={item.price} number={ item.number } index={index} id={item.id}  />

                            }
                        
                        })
                    }
            </div>   
            <div className='w-100 d-flex flex-column flex-lg-row px-5 px-lg-0 justify-content-around my-5'>
                    <button className=' btn btn-success fs-3' disabled> پرداخت </button>
                    <span className='text-white fs-2 text-decoration-underline text-center mt-4 mt-lg-0'> {num} قیمت نهایی </span>
            </div>   


        </>

        
    )
}
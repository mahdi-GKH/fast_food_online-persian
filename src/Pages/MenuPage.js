import { addAction,removeAction } from '../components/data';
import { useDispatch,useSelector  } from 'react-redux';
import Product from '../components/product';
import { useState } from 'react';
const images = require.context('../Assests/Images', true);
const imageList = images.keys().map(image => images(image));


function FindPicture(name){
    var image = '';
    imageList.map(item => { if(item.includes(name)){image = item;} })
    return image;
}

export default function MenuPage(){
    const list = useSelector(state => state.data.food);
    const cart  = useDispatch();
    const [Group,SetGroup] = useState('all')
    return(
        <>
            <section id='MenuSection' className="container-fluid d-flex flex-wrap p-5 my-5 "> 
                <div className='w-100 d-flex flex-wrap gap-3'>
                    <button onClick={()=> SetGroup('all') } className='btn btn-dark'> همه </button>
                    <button onClick={()=> SetGroup('pizza') } className='btn btn-dark'> پیتزا ها </button>
                    <button onClick={()=> SetGroup('burger') } className='btn btn-dark'> برگر ها </button>
                    <button onClick={()=> SetGroup('Beverage') } className='btn btn-dark'> نوشیدنی ها </button>

                </div>
                {
                    list.map((item)=> {

                        if(Group === 'all'){

                            return <Product img={FindPicture(item.id)} name={item.name} price={item.price} id={item.id} />
                        }else{
                            if( item.group === Group ){
                                return <Product img={FindPicture(item.id)} name={item.name} price={item.price} id={item.id} />
                            }
                        }
                            
                            
                        
                    })
                }
            </section>
            
        </>
    )
    
}
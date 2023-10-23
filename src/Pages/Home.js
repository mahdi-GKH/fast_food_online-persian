import Slider from "../components/slider";
import { addAction,removeAction } from '../components/data';
import { useDispatch,useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';

import Product from '../components/product';


const images = require.context('../Assests/Images', true);
const imageList = images.keys().map(image => images(image));


function FindPicture(name){
    var image = '';
    imageList.map(item => { if(item.includes(name)){image = item;} })
    return image;
}

export default function Home(){
    const list = useSelector(state => state.data.food);
    const cart  = useDispatch();
    return(<section className="container-fluid">
        
        <section id='slider' className= "container-fluid P-0 m-0 ">
        <div id="carouselExampleCaptions" className="carousel slide">
           
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={FindPicture('Bg-slider2')} className="d-block w-100" alt="..."/>
                    
                </div>
                <div className="carousel-item">
                    <img src={FindPicture('Bg-slider3')} className="d-block w-100" alt="..."/>
                    
                </div>

                <div className="carousel-item">
                    <img src={FindPicture('Bg-slider1')} className="d-block w-100" alt="..."/>
                    
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>




        </section>

        <section id='about' className='container-fluid p-5 '>
                    <div className='row gap-5 justify-content-center'>
                    <figure className='bg-danger p-0 col-12 col-md-6 col-lg-3 position-relative rounded-5'>
                        
                        <img src={ FindPicture('Price') } className='img-fluid w-100 h-100 rounded-5' />

                        <figcaption className='position-absolute w-100 bottom-0 start-0 text-center h2 m-0 pb-5 text-white rounded-5'> <p> قیمت مناسب </p> </figcaption>
                    </figure>

                    <figure className='bg-danger p-0 col-12 col-md-6 col-lg-3 position-relative rounded-5'>
                        
                        <img src={ FindPicture('FastFood') } className='img-fluid w-100 h-100 rounded-5' />

                        <figcaption className='position-absolute w-100 bottom-0 start-0 text-center h2 m-0 pb-5 text-white rounded-5'> <p> طعم دلنشین  </p> </figcaption>
                    </figure>
                    <figure className='bg-danger p-0 col-12 col-md-6 col-lg-3 position-relative rounded-5'>
                        
                        <img src={ FindPicture('OrderOnline') } className='img-fluid w-100 h-100 rounded-5' />

                        <figcaption className='position-absolute w-100 bottom-0 start-0 text-center h2 m-0 pb-5 text-white rounded-5'> <p> سفارش آنلاین</p> </figcaption>
                    </figure>

                    </div>
                    
                    
                    
                    
        </section>

        <section id='menu' className='container-fluid p-5 mb-5'>
                    <div className='w-100 d-flex justify-content-center flex-column flex-lg-row gap-4 py-5'> 
                        <button className='btn btn-outline-light' disabled>  اقتصادی </button>
                        <button className='btn btn-outline-light' disabled>  پیتزا ها </button>
                        <button className='btn btn-outline-light' disabled>  برگر ها </button>
                        <button className='btn btn-outline-light' disabled>  نوشیدنی </button>
                        <button className='btn btn-dark'> پرفروش ترین ها </button>
                    </div>

                    <div className='row'>
                            {
                                
                                list.map((item)=> {
                                    if (item.show) {
                                        
                                        return <Product img={FindPicture(item.id)} name={item.name} price={item.price} id={item.id} />
                                    }
                                })


                            }
                    </div>
                    
        </section>

        <section id='delivery' className='container-fluid p-5 text-white'>
                            <div id='delivery-text' className='col-12 col-md-6 mx-auto text-center pt-5 w-100 p-5 rounded-5'>
                                <p className='h1 mb-5'> ارسال به سراسر تهران </p>
                                <p className="w-50 mx-auto"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی  </p>
                                <button className='btn btn-outline-light' disabled> تماس با ما </button>
                            </div>
                            

        </section>

        <section className='container-fluid my-5 '>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <img src={FindPicture('res1')} className='img-fluid w-100 h-100'/>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <img src={FindPicture('res2')} className='img-fluid w-100 h-100'/>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <img src={FindPicture('res3')} className='img-fluid w-100 h-100'/>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <img src={FindPicture('res4')} className='img-fluid w-100 h-100'/>
                        </div>
                    </div>
        </section>

    </section>
    )
}
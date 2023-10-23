import { useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { addAction,notificationAction } from "../components/data";

const images = require.context('../Assests/Images', true);
const imageList = images.keys().map(image => images(image));


function FindPicture(name){
    var image = '';
    imageList.map(item => { if(item.includes(name)){image = item;} })
    return image;
}


export default function ProductPage(){
    const cart = useDispatch();
    const id = useParams().id;
    const products = useSelector((state) => state.data.food)
    for(let i = 0 ; i < products.length ; i++){
        let item = products[i];
       
        if (id === item.id){
            
            return(
            <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 p-5">
                            <img src={FindPicture(item.id)} className="img-fluid w-100 h-100" alt="" />
                        </div>
                        <div className="col-12 col-lg-6 text-white d-flex flex-column justify-content-center" dir="rtl">
                            <p className="fs-3 w-100 border-bottom mb-4"> {item.name} </p>
                            <p className="mb-3"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
                            <p className="text-decoration-underline text-start fs-3 "> {item.price} </p>
                            <button className="btn btn-danger w-100 mt-5 mb-3" onClick={()=> {
                                cart(addAction(item.id));
                                cart(notificationAction(item.id));
                            } } > افزودن به سبد خرید </button>
                        </div>
                    </div>
                
                </div>
            )
           
        }
        
    }
}
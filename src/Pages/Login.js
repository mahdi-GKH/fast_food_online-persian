import { useDispatch } from "react-redux";
import { AccountAction } from "../components/data";
import { useNavigate  } from "react-router-dom";


export default function Account(){
    let acc = useDispatch();
    const location = useNavigate();
    return (
        
        <div className="FormSection vh-100 ">
            <div className="row  ">
                <div className="col-12 ">

                    <h1 className="text-white p-5">  </h1>
                    
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center  ">

                <form className="form col-11 col-lg-5">
                    
                    
                    <div className="input-group my-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent border-0 border-bottom border-warning rounded-0" > <i className=" text-white fs-1 pe-3"> 09 </i> </span>
                        </div>
                        <input type="number" readOnly value='000000000' className="form-control bg-transparent border-0 border-bottom border-warning rounded-0 shadow-none text-white" placeholder="Email"  />
                    </div>
                    
                    
                    <button onClick={submit}  className="btn btn-outline-light col-11 col-md-5 px-5 py-3 fs-3  d-block mx-auto my-5"> ورود </button>
                    <p className="text-warning fs-4"> توجه : این یک سایت آزمایشی است کافیست بر روی "ورود" کیلیک کنید  </p>
                    
                </form>

                </div>
            </div>
            
        </div>
    )
    function submit(e){
        e.preventDefault();
        
        acc(AccountAction());
        location('/cart')
    }
}
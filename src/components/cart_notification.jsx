import { Link } from "react-router-dom";

export default function Notification(){
    return (
        <div id="Notification_text" className="position-fixed bottom-50 z-3  col-12 col-lg-3 bg-primary d-flex justify-content-center align-items-center p-3 rounded-5">
            <p dir="rtl" className="fs-4 text-white "> به سبد خرید اضافه شد 
            <Link  to={'/cart'} className="btn btn-info me-3"> تکمیل خرید </Link>    
            </p>
        </div>
    )
}
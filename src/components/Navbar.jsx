import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
export default function Nav(){
    const user = useSelector((state)=> state.data.user)
    return(
        <div className= "Nav w-100 shadow-lg pt-2">
            <div className="w-100  m-0 p-0 justify-content-between row p-1 ">
                <div className="col-3 text-center d-flex justify-content-center align-items-center ">
                    <span className="text-white display-5"> LOGO </span>
                </div>
                <div className="col-6  d-none d-lg-block">
                    <nav className="mx-auto text-center d-flex justify-content-center" dir="rtl">
                        <ul className="list-unstyled d-inline-block d-flex flex-row  fs-4  gap-5 text-center align-items-center p-0 m-0 ">
                            <li> <Link to={'/'} className="text-white text-decoration-none"> خانه </Link> </li>
                            <li> <Link to={'/menu'} className="text-white text-decoration-none"> منو  </Link> </li>
                            <li> <Link to={'/cart'} className="text-white text-decoration-none"> <i className="fa fa-shopping-cart"></i> سبد خرید  </Link> </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="col-3 d-none d-lg-block">

                    { user.login === false ? <Link className="text-white text-decoration-none fs-4 " to={'/login'}>  ورود / ثبت نام  <span className="fa fa-user"></span></Link> : <button className="btn btn-outline-light" onClick={showoprofile}>  {user.name} <span className="fa fa-user"></span></button> }

                    
                </div>
                <div className="col-9 text-end d-block d-lg-none">
                    <button className="btn btn-dark"> <i onClick={showoffcanvas} className="fa fa-bars">  </i> </button>
                </div>

            </div>
            <div id='offcanvas' className="offcanvas w-100 m-0 offcanvas-end" tabindex="-1"  aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    { user.login === false ? <Link className="text-white text-decoration-none fs-4 " to={'/login'}>  ورود / ثبت نام  <span className="fa fa-user"></span></Link> : <button className="btn btn-outline-light " onClick={showoprofile}>  {user.name} <span className="fa fa-user"></span></button> }

                    
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={showoffcanvas}></button>
                </div>
                <div className="offcanvas-body">
                        <ul className="list-unstyled d-block d-flex flex-column fs-4  gap-5 text-center align-items-center p-0 m-0 ">
                            <li> <Link to={'/'} className="text-white text-decoration-none"> خانه </Link> </li>
                            <li> <Link to={'/menu'} className="text-white text-decoration-none"> منو  </Link> </li>
                            <li> <Link to={'/cart'} className="text-white text-decoration-none"> <i className="fa fa-shopping-cart"></i> سبد خرید  </Link> </li>
                            
                        </ul>
                </div>
            </div>
            
            
            
            <div id="profile" className="position-fixed top-0 start-0 vh-100 w-100 bg-blur d-none d-flex justify-content-center align-items-center" dir="rtl">

                <div className="col-12 col-lg-6  bg-light p-3">
                    <button className="btn btn-close" onClick={showoprofile}>  </button>
                    <p className="mt-5 fs-3"> <i className="fa fa-user"></i> نام:   {user.name} </p>
                    <p className="my-3 fs-3"> <i className="fa fa-phone"></i> شماره همراه: {user.phonenumber}  </p>
                    <p className="fs-3"> <i className="fa fa-location-arrow"></i> آدرس:  {user.location} </p>
                    <button className="btn btn-danger w-100 p-2 " disabled> ویرایش </button>
                </div>
            
            </div>

            
            
            
        </div>
    )
    function showoffcanvas(){
        document.getElementById('offcanvas').classList.toggle('show');
    }
    function showoprofile(){
        document.getElementById('profile').classList.toggle('d-none');
    }
}
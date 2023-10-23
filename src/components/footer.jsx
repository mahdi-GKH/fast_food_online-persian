export default function Footer(){
    return(
        <footer className="container-fluid p-0 p-lg-5 text-white p-md-5" dir="rtl">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 align-items-center justify-content-center d-flex ">
                    <span className="text-white display-5"> LOGO </span>
                </div>
                <div className="col-12 col-md-6 col-lg-4 align-items-center justify-content-center d-flex flex-column my-4 my-lg-0">
                    <div className="w-100 h-100 bg-danger text-white fs-1 text-center">
                        Map
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 align-items-center justify-content-center d-flex flex-column">
                    <p>
                        ما را در شبکه های اجتماعی دنبال کتید
                    </p>
                    <div className="d-flex gap-3">
                        <a href="#" className="fa fa-instagram text-decoration-none text-white fs-3">  </a>
                        <a href="#" className="fa fa-twitter text-decoration-none text-white fs-3">  </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
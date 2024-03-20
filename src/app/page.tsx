import Image from "next/image";
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import MyOffCanvasHeader from "@/app/myoffcanvas";

export default function Home() {
  return (
    <>
        <main className="flex-shrink-0">
            <NavBar />
            <WriteUp />
        </main>
        <Footer />
    </>
  );
}

function NavBar() {
    const img_size = 48;
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <Image
                    src="/icons8-iris-scan-48.png"
                    alt="ReaphSoft Logo"
                    width={img_size}
                    height={img_size}
                    priority
                />
            </a>
            <MyOffCanvasHeader />
        </div>
      </nav>
    );
}

function WriteUp() {
    return (
        <div className="container">
            <div className="my-4 my-lg-5"></div>
            <div className="row">
                <div className="my-0 container my-lg-5"></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="text-white text-center sono-regular">
                        <h2>Reaphsoft is an emerging business, with the focus to providing excellent software and security
                            services to its clients across the globe.</h2>
                        <h3 className="mt-5">We desire to work in partnership with all our clients, both local and international.</h3>
                    </div>
                </div>
                <div className="col-12 col-md-5"></div>
            </div>
            <div className="my-4"></div>
            <div className="row">
                <div className="col-12 col-md-10">
                    <div className="row text-center gy-4">
                        <div className="col-12 col-md-4">
                    <a className="home-btn text-white btn sono-regular">Software Dev</a>
                </div>
                        <div className="col-12 col-md-4">
                    <a className="home-btn text-white btn sono-regular">IT Security</a>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return(
      <footer className="text-white text-center footer mt-4 mt-lg-0">
          <div className="container">
            <p>&copy; 2024</p>
          </div>
      </footer>
    );
}
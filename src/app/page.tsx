import Image from "next/image";

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
            <button className="navbar-toggler align-self-start mt-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Offcanvas</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ms-auto">
                  <ul className="navbar-nav justify-content-between flex-grow-1 px-1 text-white">
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href="#">Cyber Security</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href="#">Software Dev</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link">
                          <Image src="/outline_travel_explore_white_24dp.png" alt="Search" width={24} height={24} />
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex mt-3 visually-hidden" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
            </div>
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
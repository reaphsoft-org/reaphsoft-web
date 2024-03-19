import Image from "next/image";

export default function Home() {
  return (
    <main>
        <NavBar />
    </main>
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

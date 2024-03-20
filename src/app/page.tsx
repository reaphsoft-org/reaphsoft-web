import Base from "@/app/base";

export default function Home() {
  return (
    <Base content={WriteUp()} />
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
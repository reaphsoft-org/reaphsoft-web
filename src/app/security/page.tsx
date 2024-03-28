'use client';
import Base from "@/app/security/base";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/image";
import {Carousel} from "react-bootstrap";

export default function Page (){
    return (
         <Base content={<Main />} />
    );
}

function Main(){
    return (
       <>
         <div className="container">
             <div className="row">
                 <h5 className="text-center sono-regular my-4">Get Started with out free open source integration.</h5>
                 <div className="col-12 col-md-10 offset-md-1">
                     <div className="text-center">
                         <MyCarousel />
                    </div>
                 </div>
             </div>
         </div>
       </>
    );
}

export function MyCarousel() {
    return (
        <Carousel controls={false}>
            <Carousel.Item>
                <Image src="/frpk/89029.jpg" alt="" fluid />
                <Carousel.Caption>
                    <h3>OSINT Automator</h3>
                    <a className="btn btn-dark">OSINT</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/frpk/2150038856.jpg" alt="" fluid />
                <Carousel.Caption>
                    <h3 className="text-light">Intrusion Check</h3>
                    <a className="btn btn-light">Check</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
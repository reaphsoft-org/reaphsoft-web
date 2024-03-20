"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import {OffcanvasBody, OffcanvasTitle} from "react-bootstrap";
import Image from "next/image";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function MyOffCanvasHeader() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Button className="navbar-toggler align-self-start mt-0" onClick={handleShow}>
                <span className="navbar-toggler-icon"></span>
            </Button>
            <Offcanvas show={show} backdrop="static" onHide={handleClose} placement={'end'} responsive={'lg'}>
                <OffcanvasHeader closeButton={true} closeVariant={"white"}>
                    <OffcanvasTitle>ReaphSoft</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
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
                        <a className="nav-link" href="#">Software Dev</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                  <a className="nav-link" href="#">Cyber Security</a>
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
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}
"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import {NavDropdown, OffcanvasBody, OffcanvasTitle} from "react-bootstrap";
import Image from "next/image";

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
                    <OffcanvasTitle>Reaphsoft Security</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <ul className="navbar-nav justify-content-between flex-grow-1 px-1 text-white">
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href="/about/">About Us</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <ServicesDropDown />
                    </li>
                    <li className="nav-item mx-lg-4">
                      <CompetenciesDropDown />
                    </li>
                    <li></li>
                    <li className="nav-item mx-lg-4 d-none d-lg-block">
                      <a className="nav-link">
                          <Image src="/outline_travel_explore_white_24dp.png" alt="Search" width={24} height={24} />
                      </a>
                    </li>
                  </ul>
                    <form className="d-flex d-lg-none mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

function ServicesDropDown() {
    return (
        <>
            <NavDropdown id="services-dropdown" title="Our Services" >
                <NavDropdown.Item>IT Security Gap Analysis</NavDropdown.Item>
                <NavDropdown.Item>Forensic Data Retention</NavDropdown.Item>
                <NavDropdown.Item>Cardholder Data Discovery Exercise</NavDropdown.Item>
                <NavDropdown.Item>Bespoke Threat Modelling and Assessment</NavDropdown.Item>
            </NavDropdown>
        </>
    );
}

function CompetenciesDropDown() {
    return (
        <>
            <NavDropdown title="Core Competencies">
                <NavDropdown.Item>Penetration Testing</NavDropdown.Item>
                <NavDropdown.Item>System’s Application Security</NavDropdown.Item>
                <NavDropdown.Item>Vulnerability Scanning</NavDropdown.Item>
                <NavDropdown.Item>Breach Assessment</NavDropdown.Item>
                <NavDropdown.Item>Cyber Incident Response & Assistance</NavDropdown.Item>
                <NavDropdown.Item>Systems Risk Assessment (SRS)</NavDropdown.Item>
                <NavDropdown.Item>ALC Vulnerability Management</NavDropdown.Item>
                <NavDropdown.Item>Business Analysis & IT Auditing</NavDropdown.Item>
                <NavDropdown.Item>And Many More</NavDropdown.Item>
            </NavDropdown>
        </>
    );
}
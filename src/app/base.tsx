import Image from "next/image";
import MyOffCanvasHeader from "@/app/myoffcanvas";
import React from "react";

export default function Base({content,}: Readonly<{content: React.ReactNode}>) {
  return (
    <>
        <main className="flex-shrink-0">
            <NavBar />
            {content}
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

function Footer() {
    return(
      <footer className="text-center footer mt-4 mt-lg-0">
          <div className="container footer-text">
            <p>&copy; 2024</p>
          </div>
      </footer>
    );
}
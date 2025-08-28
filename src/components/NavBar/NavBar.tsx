import "./NavBar.css";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image
                    // className={styles.logo}
                    src="/logo.png"
                    alt="Next.js logo"
                    width={100}
                    height={40}
                    priority
                    />
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex gap-2">
                        {/* <li className="nav-item">
                            <Link className={`nav-link`} href="#">
                                Location
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link`} href="#p">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link`} href="/contact">
                                Contact
                            </Link>
                        </li> */}
                        <li className="btn d-flex align-items-center fw-bold">
                            <Link href={`${process.env.NEXT_PUBLIC_PARTNER_URL}/Account/Login`}>
                                <i className="bis bi-plus-square"></i>&nbsp;
                                LIST YOUR VENUE
                            </Link>
                        </li>
                        <li className="btn btn-outline-custom d-flex align-items-center fw-bold">
                            <Link href="">
                                <i className="bis bi-plus-square"></i>&nbsp;
                                Sign In / Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Navbar;

import Navbar from "./Navbar.tsx";
import {useState} from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4 md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr] md:items-center">
                <h1><a href="/" className="logo">
                    <img src="/images/logo.svg" width={40} height={40} alt="Nguyen Tien Dung"/>
                </a></h1>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:!hidden" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen}/>
                </div>
                <a href="#contact" className="btn btn-secondary max-md:!hidden md:justify-self-end">
                    Contact me
                </a>
            </div>
        </header>
    )
}
export default Header
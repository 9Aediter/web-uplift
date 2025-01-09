//Create responsive a navigration bar using both tailwind and daisyui css and menu links on the left, a button(for contract) label name Consult on the right side when scrolled down the navbar will change from tranpalent bg to black bg and fixed on the top of the screen.
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="container flex items-center justify-between px-4 py-2 mx-auto">
                <div className="flex space-x-4">
                    <Link href="/" className="px-4 py-2 text-white hover:border-b-2 hover:border-primary">Home</Link>
                    <Link href="/" className="px-4 py-2 text-white hover:border-b-2 hover:border-primary">About</Link>
                    <Link href="/" className="px-4 py-2 text-white hover:border-b-2 hover:border-primary">Services</Link>
                    <Link href="/" className="px-4 py-2 text-white hover:border-b-2 hover:border-primary">Contact</Link>
                </div>
                <button className="btn btn-primary">Consult</button>
            </div>
        </nav>
    );
};

export default Navbar;


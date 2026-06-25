import {useRef, useEffect} from "react";
interface NavbarProps {
    navOpen: boolean;
}
const Navbar = ({ navOpen }: NavbarProps) => {
    // @ts-ignore
    const lastActiveLink = useRef<HTMLAnchorElement>(null);
    const activeBox = useRef<HTMLDivElement>(null);
    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);
    const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const target = event.currentTarget;
        lastActiveLink.current?.classList.remove('active');
        target.classList.add('active');
        lastActiveLink.current = target;

        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = target.offsetTop + 'px';
            activeBox.current.style.left = target.offsetLeft + 'px';
            activeBox.current.style.width = target.offsetWidth + 'px';
            activeBox.current.style.height = target.offsetHeight + 'px';
        }
    }
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];
    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map(({label, link, className, ref}, key) => (
                    <a
                        href={link}
                        key={key}
                        ref={ref}
                        className={className}
                        onClick={activeCurrentLink}>
                        {label}
                    </a>
                ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}
export default Navbar
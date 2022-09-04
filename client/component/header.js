import Link from 'next/link';

const header = ({currentUser}) =>{

    const links = [
        !currentUser && {label: 'Sign Up', href: '/auth/signup'},
        !currentUser && {label: 'Sign In', href: '/auth/signin'},
        currentUser && {label: 'Sell Tickets', href: '/tickets/new'},
        currentUser && {label: 'My Orders', href: '/orders'},
        currentUser && { label: 'Sign Out', href: '/auth/signout'}
    ].filter(linkConfig => linkConfig)
    .map(({label, href})=>{
        return <li key={href} className="nav-item">
            <Link href={href}>
            <a className='nav-link'>{label}</a>
            </Link>
        </li>
    })

    return(
        <div>
 <nav className="navbar navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">GitTix</a>
            </Link>
            <div className="d-flex justify-content-end">
                <ul className="nav d-flex align-items-center">
                    {links}
                </ul>
            </div>
        </nav>

<nav className="relative container mx-auto p-6">
<div className="flex items-center justify-between">
    <div className="flex items-center space-x-20">
        <div className="hidden space-x-8 font-bold lg:flex">
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
                Features
            </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
                Pricing
            </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
                Resources
            </a>
        </div>
    </div>

    <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
        <div className="hover:text-veryDarkViolet">Login</div>
        <a href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
            Sign Up
        </a>
    </div>
    <button id="menu-btn" className="block hamburger lg:hidden focus:outlines-none" type="button">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
    </button>
</div>
<div id="menu" className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
    <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
        <a href="#" className="w-full text-center">Features</a>
        <a href="#" className="w-full text-center">Prices</a>
        <a href="#" className="w-full text-center">Resource</a>
        <a href="#" className="w-full pt-6 border-t border-gray-400 text-center">Login</a>
        <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">Sign up</a>

    </div>
</div>
</nav>
        </div>
       
    );
}

export default header;
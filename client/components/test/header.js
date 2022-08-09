import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/icons8-raccoon-128.svg'


const header = ({ currentUser }) => {

  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ].filter(linksConfig => linksConfig).map(({ label, href }) => {
    return (
      <Link href={href} key={href}>
        <a href="#" className="font-cyberFonts px-8 py-2 text-white bg-racoonBlueA border-b-4 border-b-racoonBlueB rounded-lg shadow-md hover:bg-racoonBlueB hover:border-t-6 hover:border-b-0 transition-all duration-100 "
        >{label}</a>
      </Link>
    )

  })


  return (

    <nav className="container relative mx-auto p-6">
      {/* Flex Container For Nav Items */}
      <div className="flex items-center justify-between sm:space-x-20 my-6 w-min">
        <div className="z-30 hidden sm:flex w-max h-max">
          <Image src={logo} alt="" id="logo" />
        </div>

        <div className="group">
          <Link href="/">
            <a className="font-cyberFonts md:text-7xl text-3xl text-racoonBlueB group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 ">
              Racoon Republic
            </a>
          </Link>

        </div>

        <div
          className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex "
        >
          <a href="#features" className="font-cyberFonts tracking-widest hover:text-softRed md:text-cyan-500"
          >Features</a>
          <a href="#download" className="font-cyberFonts tracking-widest hover:text-softRed"
          >Contact</a>
          <a href="#faq" className=" font-cyberFonts tracking-widest hover:text-softRed w-min">About Us</a>
          {links}

        </div>
        <button
          id="menu-btn"
          className="z-30 block md:hidden focus:outline-none hamburger"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
      >
        <div className="w-full py-3 text-center">
          <a href="#features" className="block hover:text-softRed">Features</a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" className="block hover:text-softRed">Download</a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" className="block hover:text-softRed">FAQ</a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-softRed">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default header;
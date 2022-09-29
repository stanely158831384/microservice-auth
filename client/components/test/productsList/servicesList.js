import React from 'react'
import { useState, useRef, useEffect } from 'react'

export default function servicesList() {
    const [open, setOpen] = useState(false);
    const openCurrent = useRef(open);
    const catMenu = useRef(null)
    useEffect(() => {
        console.log("activated");
        openCurrent.current = open;
    }, [open])
    const openDropdownHandle = (e) => {
        e.preventDefault();
        setOpen(true);
        console.log(`open1 ${openCurrent.current}`);
    }
    const closeOpenMenus = (e) => {
        console.log(`catMenu.current ${catMenu.current}`);
        console.log(`open2 ${openCurrent.current}`);
        console.log(`catMenu.current.contains(e.target) ${catMenu.current.contains(e.target)}`);

        if (catMenu.current && openCurrent.current && !catMenu.current.contains(e.target)) {
            setOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', closeOpenMenus);
        return () => {
            document.removeEventListener('mousedown', closeOpenMenus);
        }
    }, [])
    return (
        <div ref={catMenu} className="relative">
            <a onClick={openDropdownHandle} className="font-cyberFonts tracking-widest hover:text-softRed md:text-cyan-500"
            >Home security</a>
            {open && (
                <div>
                    <div class="absolute left-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">


                        <a href="/common/cameraSecurity" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            Wyze
                        </a>

                        <hr class="border-gray-200 dark:border-gray-700 " />

                        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            Lorex
                        </a>

                    </div>
                </div>
            )}
        </div>
    )
}

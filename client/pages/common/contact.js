import React from 'react'
import { Carousel } from "flowbite-react";
import Footer from '../../components/test/footer'
import { PhoneIcon } from '@heroicons/react/24/solid'
export default function contact() {
    return (
        <div className="h-screen">

            <section id="pageTitle">
                <h1 className="text-center font-bold text-6xl m-10">Contact</h1>
            </section>

            <section id="contactList">
                <div className="space-y-5">
                    <h2 className="text-center font-bold text-2xl">Still looking for an call?</h2>
                    <p className="text-center font-bold text-2xl">We’re here to help. Please contact us and we’ll make sure you get the information you need.</p>
                    <div className="relative border-green-300 border-2 bg-white shadow-2xl w-[30%] mx-auto m-10 rounded-lg h-64	my-auto">
                        <PhoneIcon className="h-12 w-12 mx-auto mt-5" />
                        <ul className="relative space-y-3 h-[90%] w-[90%] mt-5 mx-auto">
                            <li className=" text-2xl">Telephone: 1(647)856-9355</li>
                            <li className=" text-2xl">E-mail: racoonrepubliccanada@gmail.com</li>
                        </ul>
                    </div>
                </div>



            </section>

            {/* <section id="footer">
                <Footer />
            </section> */}


        </div>
    )
}

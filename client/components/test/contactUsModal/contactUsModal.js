import React from 'react'
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline"
import { useRef, useState } from "react"
import { modalState } from "../../../atom/modalAtom"
import { Tabs } from "flowbite-react";
import { Dropdown } from "flowbite-react";

export default function contactUsModal() {
    const [open, setOpen] = useRecoilState(modalState);
    const [loading, setLoading] = useState(false);
    const customStyles = {
        content: {},
        overlay: { zIndex: 1000 }
    }

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    return (
        <div className="z-50">
            {open && (
                <>
                    <Modal
                        className=" max-w-2xl w-[90%] max-h-2xl h-[90%] p-6 absolute   bg-white left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] border-2 rounded-md shadow-md"
                        isOpen={open}
                        onRequestClose={() => { setOpen(false); }}
                        ariaHideApp={false}
                        style={customStyles}
                    >
                        <h2 className="font-bold text-2xl text-center m-2">Here is the process for ordering the installation</h2>

                        {/* <div className="font-bold text-2xl m-2">
                            <ol >
                                <li className="font-bold text-2xl m-2">1.Please contact us by this number: +1(647)856-9355.</li>
                                <li className="font-bold text-2xl m-2">2.Once the installation is scheduled, we will send one of our technician to your location.</li>
                                <li className="font-bold text-2xl m-2">3.After a full review of your property, we will give your a quotation list.</li>
                                <li className="font-bold text-2xl m-2">4.Once the client accepts the quote, our customer service will schedule the installation time. Usually the date of installation will be scheduled within 7 business days.</li>
                            </ol>
                        </div>

                        <h2 className="font-bold text-2xl text-center m-2">Optional:</h2>

                        <div className="font-bold text-2xl m-2">
                            <ol >
                                <li className="font-bold text-2xl m-2">1.Please contact us by this Email: racoonrepubliccanada@gmail.ca .</li>
                            </ol>
                        </div> */}


                        <div className="m-10">
                            <Tabs.Group
                                aria-label="Pills"
                                style="pills"
                                className="mx-auto"
                            >
                                <Tabs.Item
                                    active={true}
                                    title="Step 1"
                                >
                                    1.Please contact us by this number: +1(647)856-9355.
                                    <br />
                                    or
                                    <br />
                                    1.Please contact us by this email: racoonrepubliccanada@gmail.com
                                </Tabs.Item>
                                <Tabs.Item title="Step 2">
                                    2.Once the installation is scheduled, we will send one of our technician to your location.
                                </Tabs.Item>
                                <Tabs.Item title="Step 3">
                                    3.After a full review of your property, we will give your a quotation list.
                                </Tabs.Item>
                                <Tabs.Item title="Step 4">
                                    4.Once the client accepts the quote, our customer service will schedule the installation time. Usually the date of installation will be scheduled within 7 business days.
                                </Tabs.Item>
                            </Tabs.Group>
                        </div>

                        <a href="#" className=" font-cyberFonts px-8 py-2 my-4 text-white text-center bg-racoonBlueA border-b-4 border-b-racoonBlueB rounded-lg shadow-md hover:bg-racoonBlueB hover:border-t-6 hover:border-b-0 transition-all duration-100 block"
                            onClick={handleClose}
                        >close</a>

                    </Modal>
                </>

            )

            }
        </div>
    )
}

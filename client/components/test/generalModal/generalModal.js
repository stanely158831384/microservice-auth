import React from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { Tabs } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { profileModalState } from "../../../atom/profileModalAtom";
import { passwordModalState } from "../../../atom/passwordModalAtom";
import { generalModalState } from "../../../atom/generalModalAtom";

export default function generalModal({ children }) {
  const [open, setOpen] = useRecoilState(generalModalState);
  const [openProfileModal, setOpenProfileModal] =
    useRecoilState(profileModalState);
  const [openPasswordModal, setOpenasswordModal] =
    useRecoilState(passwordModalState);

  const [loading, setLoading] = useState(false);
  const customStyles = {
    content: {},
    overlay: { zIndex: 1000 },
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    setOpenProfileModal(false);
    setOpenasswordModal(false);
  };

  return (
    <div className="z-50">
      {open && (
        <>
          <Modal
            className=" max-w-2xl w-[90%] max-h-2xl h-[90%] p-6 absolute   bg-white left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] border-2 rounded-md shadow-md"
            isOpen={open}
            onRequestClose={() => {
              setOpen(false);
              setOpenProfileModal(false);
              setOpenasswordModal(false);
            }}
            ariaHideApp={false}
            style={customStyles}
          >
            {children}

            {/* <div className="m-10"></div> */}

            <a
              href="#"
              className=" font-cyberFonts px-8 py-2 my-4 text-white text-center bg-racoonBlueA border-b-4 border-b-racoonBlueB rounded-lg shadow-md hover:bg-racoonBlueB hover:border-t-6 hover:border-b-0 transition-all duration-100 block"
              onClick={handleClose}
            >
              close
            </a>
          </Modal>
        </>
      )}
    </div>
  );
}

import React from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState, useEffect } from "react";

import { passwordModalState } from "../../../../atom/passwordModalAtom";
import PasswordChangeTemple from "../../modalInnerTemplate/passwordChangeTemple";
const passwordResetModal = (props) => {
  const [openPasswordModal, setOpenasswordModal] =
    useRecoilState(passwordModalState);

  const [loading, setLoading] = useState(false);
  const customStyles = {
    content: {},
    overlay: { zIndex: 1000 },
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpenasswordModal(false);
  };

  useEffect(() => {
    console.log(props);
    console.log(props.data.user.id);
  });

  return (
    <div className="z-50">
      {openPasswordModal && (
        <>
          <Modal
            className=" max-w-2xl w-[90%] max-h-2xl h-[90%] p-6 absolute   bg-white left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] border-2 rounded-md shadow-md"
            isOpen={openPasswordModal}
            onRequestClose={() => {
              setOpenasswordModal(false);
            }}
            ariaHideApp={false}
            style={customStyles}
          >
            {/* <div className="m-10"></div> */}
            <PasswordChangeTemple
              data={props.data.user.id}
            ></PasswordChangeTemple>
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
};
export default passwordResetModal;

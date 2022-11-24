import useRequest from "../../../hooks/use-request";
import { useState, useEffect } from "react";
import Router from "next/router";
import { profileModalState } from "../../../atom/profileModalAtom";
import { passwordModalState } from "../../../atom/passwordModalAtom";
import { generalModalState } from "../../../atom/generalModalAtom";
import { useRecoilState } from "recoil";
const profileInputTemplate = (props) => {
  const [email, setEmail] = useState(props.data.data.user.email);
  const [address, setAddress] = useState(props.data.data.user.address);
  const [username, setUsername] = useState(props.data.data.user.username);
  const [phone, setPhone] = useState(props.data.data.user.phone);
  const [openProfileModal, setOpenProfileModal] =
    useRecoilState(profileModalState);

  const { doRequest, errors } = useRequest({
    url: "/api/users/changeuserinfo",
    method: "put",
    body: {
      email,
      address,
      username,
      phone,
    },
    onSuccess: (data) => {
      console.log("put api return data", data);
      Router.push("/");
    },
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };

  useEffect(() => {
    console.log("here is the open value", openProfileModal);
  }, [openProfileModal]);
  return (
    <div>
      <form onSubmit={onSubmit} className="p-6 md:p-20">
        {/* top content */}
        <h1 className="font-cyberFonts mb-5 text-4xl font-bold">Edit</h1>
        <label>Email Address</label>
        <input
          value={email}
          className="w-full p-6 border border-gray-300 rounded-md placeholder:font-cyberFonts placeholder:font-light"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>phone</label>
        <input
          value={phone}
          className="w-full p-6 border border-gray-300 rounded-md placeholder:font-cyberFonts placeholder:font-light"
          placeholder="Enter your password"
          onChange={(e) => setPhone(e.target.value)}
        ></input>{" "}
        <label>address</label>
        <input
          value={address}
          className="w-full p-6 border border-gray-300 rounded-md placeholder:font-cyberFonts placeholder:font-light"
          placeholder="Enter your password"
          onChange={(e) => setAddress(e.target.value)}
        ></input>{" "}
        <label>username</label>
        <input
          value={username}
          className="w-full p-6 border border-gray-300 rounded-md placeholder:font-cyberFonts placeholder:font-light"
          placeholder="Enter your password"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {errors}
        {/* middle content */}
        <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
          <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-cyberFonts font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default profileInputTemplate;

import React from "react";
import Link from "next/link";
const userCenterLeftBar = () => {
  return (
    // <>
    //   <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
    //     <Link href="/user/profile">Profile</Link>
    //   </div>
    //   <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
    //     notifications
    //   </div>
    //   <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
    //     Orders
    //   </div>
    //   <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
    //     Comments
    //   </div>
    //   <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
    //     History
    //   </div>
    // </>

    <>
      <Link href="/user/profile">
        <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
          Profile
        </div>
      </Link>
      <Link href="/user/profile">
        <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
          notifications
        </div>
      </Link>
      <Link href="/user/profile">
        <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
          Orders
        </div>
      </Link>
      <Link href="/user/profile">
        <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
          Comments
        </div>
      </Link>
      <Link href="/user/profile">
        <div className="h-1/5 bg-lime-600 hover:bg-lime-200 h-1/7 transition-all duration-100">
          History
        </div>
      </Link>
    </>
  );
};

export default userCenterLeftBar;

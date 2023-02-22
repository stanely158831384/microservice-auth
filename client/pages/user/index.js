import UserCenterLeftBar from "../../components/test/userCenter/userCenterLeftBar";
const UserProfile = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div className="flex flex-row">
        <session id="leftSideBar" className="h-screen bg-lime-400	w-1/5">
          <UserCenterLeftBar />
        </session>

        <session id="mainProfilePage" className="h-screen w-4/5 flex flex-col">
          <div className="mx-auto mt-4 bg-cyan-500 w-4/5">
            <h1 className="text-center">welcome {currentUser.email} !</h1>
            <h1 className="text-center">welcome {currentUser.id} !</h1>
          </div>
        </session>
      </div>
    );
  } else {
    return (
      <div>
        <h1>empty</h1>
      </div>
    );
  }
};

UserProfile.getInitialProps = async (context, client, currentUser) => {
  console.log("here is the profileid currentusr" + currentUser);

  return { currentUser: currentUser };
};

export default UserProfile;

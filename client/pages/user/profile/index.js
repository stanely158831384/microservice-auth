import UserCenterLeftBar from "../../../components/test/userCenter/userCenterLeftBar";
import buildClient from "../../../api/build-client";
import UserProfileTable from "../../../components/test/userCenter/userProfile/userProfileTable";
import PasswordResetModal from "../../../components/test/modal/passwordResetModal/passwordResetModal";
import UserProfileResetModal from "../../../components/test/modal/userProfileResetModal/userProfileResetModal";
const profilePage = ({ data }) => {
  return (
    <div className="flex flex-row">
      <session id="leftSideBar" className="h-screen bg-lime-400	w-1/5">
        <UserCenterLeftBar />
      </session>
      <session id="mainProfilePage" className="h-screen w-4/5 flex flex-col">
        <h1 className="text-center">Here is your profile page</h1>
        <UserProfileTable data={data} />
      </session>
      <session id="userProfileModal" className="h-screen">
        <UserProfileResetModal data={data} />
      </session>
      <session id="userProfileModal" className="h-screen">
        <PasswordResetModal data={data} />
      </session>
    </div>
  );
};

profilePage.getInitialProps = async (context) => {
  const client = buildClient(context);

  const { data } = await client.get("/api/users/currentuser/profile");

  return { data: data };
};

export default profilePage;

// export async function getServerSideProps(context) {
//   const client = buildClient(context);
//   console.log("data");

//   const { data } = await client.get("/api/users/currentuser");
//   console.log(data);
//   console.log("data");

//   return {
//     props: {
//       currentuser: data,
//     },
//   };
// }

import { Tabs } from "flowbite-react";
import Link from "next/link";
import axios from "axios";

const forumMainBody = (props) => {
  // console.log("props", props);
  const frame = (data) => {
    // console.log("data", data.data);
    return (
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item active={true} title="ALL">
          {postShowCase(data)}
        </Tabs.Item>
        <Tabs.Item title="Open">Dashboard content</Tabs.Item>
        <Tabs.Item title="Solved">Settings content</Tabs.Item>
        <Tabs.Item title="Popular">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs.Group>
    );
  };

  const tags = () => {
    return (
      <div>
        <h1 className="text-center">Popular tags</h1>
      </div>
    );
  };

  // function postShowCaseList(data) {
  //   const url = "/forum/" + data.id;
  //   return (
  //     <div
  //       key={data.id}
  //       className="flex flex-col bg-cyan-400	p-5 rounded-lg mb-5"
  //     >
  //       <session id="title" className="text-3xl">
  //         <Link href="/forum/${data._id}">
  //           <a>{data.title}</a>
  //         </Link>
  //       </session>
  //       <session id="detail">{data.detail}</session>
  //     </div>
  //   );
  // }

  const postShowCase = (posts) => {
    const deletePost = async (postId) => {
      const result = await axios.get("/api/posts");
      console.log("deletePost", result);
      console.log("deletePost postId", postId);
      const deleleResult = await axios
        .delete(`/api/posts/${postId}`)
        .then((data) => {
          console.log("success", data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    return (
      <div>
        {posts.data.map((data) => (
          <div
            key={data.id}
            className="flex flex-col border-4	p-5 rounded-lg mb-5 relative"
          >
            <session id="title" className="text-3xl">
              <Link href={"/forum/postPage/" + data.id}>
                <a>{data.title}</a>
              </Link>
            </session>
            <session id="detail">{data.detail}</session>
            <session id="footer">
              <div className="flex flex-row">
                <div>
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"></path>
                  </svg>
                </div>
                <div>
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                  </svg>
                </div>
              </div>
            </session>
            <session id="closeButton" className="absolute right-0 top-0">
              <button onClick={() => deletePost(data.id)}>
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                </svg>
              </button>
            </session>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-row  space-x-30 justify-center ">
      <div className="basis-3/4 mx-10 bg-gray-50 rounded-lg	">
        {frame(props)}
      </div>
      <div className="basis-1/4 mx-10 bg-gray-50 rounded-lg ">{tags()}</div>
    </div>
  );
};

export default forumMainBody;

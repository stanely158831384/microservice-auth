import React, { useState } from "react";
import SearchBar from "../../components/test/forum/searchBar";
import ForumMainBody from "../../components/test/forum/forumMainBody";
import axios from "axios";
import build_client from "../../api/build-client";
const forum = ({ data }) => {
  // console.log("forum index props", data);
  return (
    <div>
      <section id="searchBar">
        <SearchBar />
      </section>
      <section id="forumDetail" className="mx-10 h-screen">
        <ForumMainBody data={data} />
      </section>
      <section id="popularTags"></section>
    </div>
  );
};

// forum.getInitialProps = async (ctx) => {
//   console.log("getInitialProps", ctx);
//   const result = await build_client(ctx).get("/api/posts");
//   // console.log("result", result.data);
//   return { props: result.data };
// };

export async function getServerSideProps(context) {
  // console.log("getServerSideProps", context);

  // const result = await build_client(context).get("/api/posts");
  // console.log("result", result.data);
  // return { props: { data: result.data } };
  return { props: { data: {} } };
}

// export async function getStaticProps(context) {
//   console.log("(Re-)Generating");
//   console.log(context);

//   const result = await build_client(context).get("/api/posts");
//   // if (result.length === 0) {
//   //   return { notFound: true };
//   // }

//   // if (!result) {
//   //   return {
//   //     redirect: {
//   //       destination: "/no-data",
//   //     },
//   //   };
//   // }

//   return {
//     props: {
//       products: [],
//     },
//     revalidate: 10,
//   };
// }

export default forum;

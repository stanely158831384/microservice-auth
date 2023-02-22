import build_client from "../../../api/build-client";
import { Fragment } from "react";
import axios from "axios";
import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/post";
import Comment from "../../../models/comment";
import CreateComments from "../../../components/test/forum/createComments";
import CommentSession from "../../../components/test/forum/commentSession";
import { Card } from "flowbite-react";
const postPage = (props) => {
  console.log("postPage ProductDetailPage", props);
  const { loadedPost, loadedComments } = props;
  if (!loadedPost) {
    return <p>Loading...</p>;
  }
  const result = JSON.parse(loadedPost);
  const commentResult = JSON.parse(loadedComments);
  return (
    <div className="flex flex-col">
      {/* title */}
      <div className="flex-col">
        <div className="max-w-2xl mx-auto my-4">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {result[0].title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {result[0].detail}
            </p>
          </Card>
        </div>
      </div>

      {/* comments panel */}
      <div className="flex-col">
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                Discussion (20)
              </h2>
            </div>
            {CreateComments(result[0])}
          </div>
        </section>
      </div>

      {/* comments */}
      <div className="flex-col">
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
          <div className="max-w-2xl mx-auto px-4">
            {CommentSession(commentResult)}
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  await dbConnect();

  console.log("[pid].js getStaticProps", context);
  const { params } = context;
  const postId = params.pid;
  const post = await Post.find({ _id: postId });
  const commentResult = await Comment.find({ postId: postId });
  console.log("post", post);
  console.log("commentResult", commentResult);

  if (!post) {
    return { notFound: true };
  }
  const postString = JSON.stringify(post);
  const commentsString = JSON.stringify(commentResult);
  console.log("[pid].js postString", post);
  return {
    props: {
      loadedPost: postString,
      loadedComments: commentsString,
    },
  };
}

export async function getStaticPaths() {
  //   const result = await build_client(context).get("/api/posts");
  // const result = await axios.get("/api/posts");
  await dbConnect();
  const result = await Post.find({});

  console.log("result", result);
  const ids = result.map((result) => result._id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id.toString() } }));
  console.log("[pid].js getStaticPaths", pathsWithParams);
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}
export default postPage;

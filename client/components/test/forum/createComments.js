import { useState } from "react";
import Router from "next/router";
import useRequest from "../../../hooks/use-request";
const createComments = (props) => {
  const [comment, setComment] = useState("");
  const [postId, setPostId] = useState(props._id);
  const [seq, setSeq] = useState(0);
  console.log("createComments props", props);
  const { doRequest, errors } = useRequest({
    url: "/api/comments",
    method: "post",
    body: {
      comment,
      postId,
      seq,
    },
    onSuccess: (data) => {
      Router.push(`/forum/postPage/${postId}`);
      //   console.log(data);
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <form className="mb-6" onSubmit={onSubmit}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label for="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        name="submit"
        className="bg-blue-500 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      >
        Post comment
      </button>
      {}
    </form>
  );
};

export default createComments;

import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const createPost = () => {
  const defaultType = ["general"];
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState(defaultType);
  const { doRequest, errors } = useRequest({
    url: "/api/posts",
    method: "post",
    body: {
      title,
      detail,
      type,
    },
    onSuccess: (data) => {
      Router.push("/");
      //   console.log(data);
    },
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };
  const form = () => {
    return (
      <div className="">
        <h1>Create a post</h1>
        <form onSubmit={onSubmit}>
          <p>
            <strong>please add a topic</strong>
          </p>
          <input
            type="text"
            name="topic_owner"
            size="40"
            maxLength="150"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="topic here"
          />
          <p>
            <strong>Please add a content</strong>
          </p>
          <textarea
            name="post_text"
            rows="8"
            cols="40"
            wrap="virtual"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="please input your detail"
          ></textarea>

          <p>
            <input type="submit" name="submit" value="Add Topic" />
          </p>
        </form>
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-center bg-white h-screen">
      <div className="flex h-fit w-fit justify-center bg-lime-200 m-auto">
        {form(onSubmit)}
      </div>
    </div>
  );
};

export default createPost;

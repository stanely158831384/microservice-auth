import CommentSessionTemplate from "./commentSessionTemplate";
const commonSession = (props) => {
  return (
    <div>
      {/* <h1>sadfasg</h1> */}
      {props?.length > 0 ? (
        <div>{CommentSessionTemplate(props)}</div>
      ) : (
        <div>
          <h1>No comments</h1>
        </div>
      )}
    </div>
  );
};

export default commonSession;

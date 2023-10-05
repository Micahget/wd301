/*eslint-disable */
import { useCommentsState } from "../../context/comment/context";
import { CommentState } from "../../context/comment/types";
import { UsersState } from "../../context/members/reducer";
import { useUsersState } from "../../context/members/context";

const CommentList = () => {
  const state: CommentState = useCommentsState();
  const userState: UsersState | undefined = useUsersState();
  const { users }: any = userState;
  const { comments, isLoading, isError, errorMessage } = state;
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const findOwner = (id: number) => {
    const user = users.find((user: any) => user.id === id);
    if (user) return user.name;
    return "unknown";
  };

  return (
    <>
      <div></div>
      {comments.map((comment: any) => (
        <div
          key={comment.id}
          className="comment block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {comment.description}
          </h5>
          by: {findOwner(comment.owner)} at{" "}
          {new Date(comment.createdAt).toLocaleString("en-IN")}
        </div>
      ))}
    </>
  );
};
export default CommentList;

const createComment = (state = false, action) => {
  if (action.type === "COMMENT_CREATED_SUCCESSFULLY") {
    return action.payload;
  }
  return state;
};

export default createComment;

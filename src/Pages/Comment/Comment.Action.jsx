import axios from "axios";

const createComment = ({ token }, postId, comment) => dispatch => {
  axios
    .post(`/api/v1/media/${postId}/comments`, comment, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "COMMENT_CREATED_SUCCESSFULLY",
          payload
        });
      }
    });
};

export { createComment };

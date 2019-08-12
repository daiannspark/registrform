import axios from "axios";

const registerUser = async user => {
  try {
    const res = await axios.post("http://localhost:3000/users/", user);
    if (res && res.status === 201) {
      return res.data;
    }
  } catch (err) {
    return { isError: err.message };
  }
};

export default registerUser;
import axios from "axios";
axios.defaults.baseURL = "https://tree-care-rest-api.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:3001/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function signinUserApi(userData) {
  const { data } = await axios.post("/api/users/login", userData);
  token.set(data.ResponseBody.token);
  return data.ResponseBody;
}

export async function signupUserApi(userData) {
  await axios.post("/api/users/signup", userData);
  const { name, email, password } = userData;
  const data = signinUserApi({
    name,
    email,
    password,
  });
  return data;
}

export async function logoutUserApi(persistedToken) {
  token.set(persistedToken);
  const { data } = await axios.get("/api/users/logout", persistedToken);
  token.unset();
  return data;
}

export async function getUserInfo(accessToken) {
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  const userInfo = await axios.get("api/users/current");
  return { email: userInfo.email };
}

export async function refreshUserTokenApi({ persistedToken }) {
  token.set(persistedToken);
  const { data } = await axios.get("/api/users/refresh", persistedToken);

  return data;
}
export async function getAllUsersApi() {
  const { data } = await axios.get("/api/users");
  return data;
}

export async function delUserByIdApi(id) {
  // console.log("{id}", id);
  await axios.delete(`/api/users/${id}`, id);
  return;
}
export async function getAllTreesApi() {
  const { data } = await axios.get("/api/trees");
  return data;
}
export async function addTreeApi(treeData) {
  // console.log("treeData", treeData);
  const data = { trees: { ...treeData }, method: "add" };
  const { message } = await axios.post("/api/trees/add", data);
  return message;
}
export async function updateTreeApi(treeData) {
  const data = { trees: { treeData }, method: "update" };
  const { message } = await axios.post("/api/trees/add", data);
  return message;
}
export async function deleteTreeApi(treeData) {
  const data = { trees: { treeData }, method: "delete" };
  await axios.delete("/api/trees/add", data);
  return;
}
export async function getOneTreeApi(registrationNumber) {
  console.log("registrationNumber", registrationNumber);
  const { data } = await axios.get(`/api/trees/${registrationNumber}`);
  return data;
}

export async function getAllAdminApi() {
  const { data } = await axios.get("/api/admin/");
  return data;
}
export async function addTreeAdminApi(trees) {
  const { data } = await axios.post("/api/admin/", trees);
  return data;
}

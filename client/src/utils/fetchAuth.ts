import axios  from "axios";
interface user {
    login: string,
    password: string,
    email?: string
}

const fetchAuth = async (userData: user) => {
    let res;
    await axios.post('http://localhost:200/register', userData)
  .then(function (response) {
      console.log(response)
      res = response.data.token
  })
  .catch(function (error) {
      console.log(error);
  });
    return res;
}

export default fetchAuth;

//export const fetchRegister = async (userData: user) => {
//    await fetch('/register', {
//        headers: { "Content-Type": "application/json" },
//        method: "POST",
//        body: JSON.stringify(userData)
//    })
//}

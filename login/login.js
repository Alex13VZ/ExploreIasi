const loginData = {
  username: "alex",
  password: "alex",
};
const user = document.getElementById("user");
const password = document.getElementById("parola");

function logIn() {
  if (
    user.value === loginData.username &&
    password.value === loginData.password
  ) {
    window.location.href = "/home/home.html";
  } else {
    var div1 = document.createElement("div");
    div1.className = "eroareText";
    div1.innerHTML = "User or Password is incorrect";
    document.getElementById("eroareLogin").appendChild(div1);
    console.log("kkkk");
    setTimeout(() => {
      document.getElementById("eroareLogin").removeChild(div1);
    }, 5000);
  }
}

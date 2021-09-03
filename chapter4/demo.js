class Users {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  // user = {
  //   name: "ghan",
  //   chop(x) {
  //     var _this = this;
  // Can be access name using this
  //     setTimeout(function () {
  //       if (x > 0) {
  //         console.log(_this.name);
  //         x--;
  //       }
  //     }, 1000);
  //   },
  // };
  user = {
    name: "ghan",
    chop(x) {
      setTimeout(() => {
        if (x > 0) {
          console.log(this.name);
          x--;
        }
      }, 1000);
    },
  };
}
const user = new Users("Bhanu", "gplucky@gmail.com");
console.log(user.user.chop(5));

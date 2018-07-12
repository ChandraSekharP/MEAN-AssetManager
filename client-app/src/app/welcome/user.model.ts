\class User {
    _id: string;
    username: string;
    loginName: string;
    password: string;
    passwordRetype: string;

    constructor() {
      this.username = ""
      this.loginName = ""
      this.password = ""
      this.passwordRetype = ""
  }
}
export default User;

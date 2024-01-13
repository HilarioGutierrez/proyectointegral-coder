class User {

    constructor(props) {
        this.id = props.id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.password = props.password;
        this.confirmUser = props.confirmUser;
        this.lastLogin = props.lastLogin;
    }
}

export default User;
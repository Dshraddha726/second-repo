function UserLoggin(props){
    return<h1>welcome back!</h1>;
}
function GuestLoggin(props){
    return<h1>please sign up</h1>;
}
function SignUp(props){
    const isLoggedIn =props.isLoggedIn;
    if(isLoggedIn){
        return <UserLoggin/>;
    }
    return <GuestLoggin/>;
}

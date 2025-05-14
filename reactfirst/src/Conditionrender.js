import React,{Component} from "react";
function Message(props)
{
    if(props.isLoggedIn)
        return<h1>welcome back</h1>;
    else 
    return<h1>please login first</h1>;
}
function Login(props)
{
    return(
        <button onClick={props.clickinfo}>login</button>
    );
}
function Logout(props)
{
    return(
        <button onClick={props.clickinfo}>Logout</button>
    );
}
class Conditionrender extends Component{
    constructor(props)
    {
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
        this.handleLogout=this.handleLogout.bind(this);
        this.state={isLoggedIn:false};
    }
    handleLogin()
    {
        this.setState({isLoggedIn:true});
    }
    handleLogout()
    {
        this.setState({isLoggedIn:false});
    }
    render(){
        return(
            <div>
                <h1>conditional rendering example</h1>
                <Message isLoggedIn ={this.state.isLoggedIn}/>
                {
                    (this.state.isLoggedIn)?(
                        <Logout clickinfo={this.handleLogout}/>
                    ):(
                        <Login clickinfo={this.handleLogin}/>
                    )
                }
            </div>
        );
    }
}
export default Conditionrender;

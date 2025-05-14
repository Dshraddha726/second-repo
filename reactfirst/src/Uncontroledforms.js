import React,{ Component } from "react";

class Uncontroledforms extends Component{
    constructor(props){
        super(props);
        this.updateSubmit=this.updateSubmit.bind(this);
        this.input = React.createRef();
        }
        updateSubmit(event){
            alert('You have enter the username');
            event.preventDefault();
        }
        render(){
            return (
                <form onSubmit={this.updateSubmit}>
                    <h1>uncontrolled form example</h1>
                    <label> 
                        Name:
                        <input type = "text" ref={this.input}/>
                    </label>
                    <label>
                        CompanyName:
                        <input type ="text" ref ={this.input}/>
                    </label>
                    <input type ="submit" value ="Submit"/>
                </form>
            );
        }
    }
    export default Uncontroledforms ;

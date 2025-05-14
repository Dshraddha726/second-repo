import React,{Component} from 'react';
class Controledforms extends React.Component{
    constructor(props){
        super(props);
        this.state
        this.updateSubmit=this.updateSubmit.bind(this);
        this.input=React.createRef();
        }
        updateSubmit(event){
            alert('You have enter the username and company succesfully');
            event.preventDefault();
        }
        render(){
            return (
                <form onSubmit={this.updateSubmit}>
                    <h1>Uncontrolled Form exampple</h1>
                    <label>Name:
                        <input type ="text" ref ={this.input}/>
                    </label>
                    <label>
                        CompanyName:
                        <input type ="text" ref={this.input}/>
                    </label>
                    <input type ="submit" value ="Submit"/>
                </form>
            );
        }
    }
    export default Controledforms;

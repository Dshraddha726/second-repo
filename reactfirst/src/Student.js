import { Component } from "react";

class Student extends Component{
    constructor(){
        super();
        this.state = {
            data:
            [
                {
                    "name": "Abhishek"
                },
                {
                    "name":"Saharsh"
                },
                {
                    "name":"Ajay"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <StudentName/>
                <ul>
                    {this.state.data.map((item) => <List data = {item} />)}
                </ul>
            </div>
        );
    }
}
class StudentName extends Component{
    render (){
        return(
            <div> 
                <h1>Student Name Detail</h1>
            </div>
        );
    }
}
class List extends Component{
    render(){
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}
export default Student;



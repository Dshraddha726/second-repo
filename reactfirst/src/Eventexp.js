import React, {Component} from 'react';
class Eventexp extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            companyName:""
        };
    }
    changeText(event){
        this.setState({
            companyName:event.target.value
        });
    }
    render(){
        return(
            <div>
                <h2>simple event example</h2>
                <label htmlFor='name'>enter company name</label>
                <input type='text' id="companyName" onChange={this.changeText.bind(this)}/>
                <h4>you enter:{this.state.companyName}</h4>
            </div>
        );
    }

}
export default Eventexp;
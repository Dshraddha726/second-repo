import React from 'react';
import ReactDOM from 'react-dom';
class Css2 extends React.Component{
    render(){
        const mystyle={
            color:"Green",
            backgroundcolor:"lightBlue",
            padding : "10px",
            fontFamily:"Arial"
        };
        return (
            <div>
                <h1 stytle ={mystyle}>hello javapoint</h1>
                <p>here you can find all css</p>
            </div>
        );
    }
}
export default Css2;
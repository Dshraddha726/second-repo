import React, { Component } from 'react';  
class DemoNew extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Default Props Example</h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>          
          </div>  
        );  
    }  
}  
DemoNew.defaultProps = {  
   name: "JavaTpoint"  
}  
export default DemoNew;  

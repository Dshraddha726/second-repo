import React from 'react';   
import ReactDOM from 'react-dom';   
  
function ListItem(props) {  
  return <li>{props.value}</li>;  
}  
  
function NumberList(props) {  
  const numbers = props.numbers;  
  const listItems = numbers.map((number) =>  
    <ListItem key={number.toString()}  
              value={number} />  
  );  
  return (  
    <div>  
      <h2>React Map Example</h2>  
          <ul> {listItems} </ul>  
    </div>  
  );  
}  
export default NumberList;  

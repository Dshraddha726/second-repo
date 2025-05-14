import React from 'react';
import ReactDOM from 'react-dom';
function List1() {
    const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
});

}
export default List1;
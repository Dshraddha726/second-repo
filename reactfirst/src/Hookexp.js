import React, {useState} from 'react';
function Hookexp(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>you clicked{count} times </p>
            <button onClick={()=> setCount(count + 1)}>Click me</button>
        </div>
    );
}
export default Hookexp;
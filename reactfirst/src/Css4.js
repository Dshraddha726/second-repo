import React from "react";
import ReactDOM from "react-dom";
import styles from './myStyle.module.css';
class Css4 extends React.Component{
    render(){
        return (
            <div>
                <h1 className={styles.mystyle}>hello java</h1>
                <p className={styles.parastyle}> It provide great css</p>
            </div>
        );
    }

}
export default Css4;
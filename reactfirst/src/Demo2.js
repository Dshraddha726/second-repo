import React, {Component} from 'react';
class Demo2 extends React.Component{
    constructor() {
        super();
        this.state={displayBio:true};
    } 
    render(){
        const bio = this.state.displayBio? (
            <div>
                <h3>this is javapoint</h3>
            </div>
        ): null;
        return(
            <div>
                <h1>Welcome to JP</h1>
                {bio}
            </div>
        );
        
    }
}
export default Demo2;
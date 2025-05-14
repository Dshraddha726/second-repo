import React, {Component} from 'react';
class Demo3 extends React.Component{
    constructor(){
        super();
        this.state = {displayBio: false};
        console.log('Component this', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

    }
    toggleDisplayBio(){
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        return(
            <div>
                <h1>welcome</h1>
            {
                this.state.displayBio?(
                    <div>
                        <h4> javapoint is the besr institute </h4>
                        <button onClick={this.toggleDisplayBio}>show less</button>
                    </div>
                ):(
                    <div>
                        <button onClick={this.toggleDisplayBio}>read more</button>
                    </div>
                )
            }
            </div>
        )
    }
}
export default Demo3; 
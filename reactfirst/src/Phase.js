import React, {Component} from 'react';
class Phase extends React.Component{
    constructor(props){
        super(props);
        this.state={hello: "JavaTpoint"};
        this.changeState = this.changeState.bind(this)
    }
    render(){
        return(
            <div>
                <h1>React component lifecycle</h1>
                <h3>hello{this.state.hello}</h3>
                <button onClick={this.changeState}>click here</button>
            </div>
        );
    }
    componentWillMount(){
        console.log('Component Will MOUNT!')
    }
    componentDidMount(){
        console.log("Component Did MOUNT!")
    }
    changeState(){
        this.setState({hello:"All its great"});

    }
    componentWillReceiveProps(newProps){
        console.log('Component will Recieve Props')
    }
    shouldComponentUpdate(newProps,newState){
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('Component Did UPDATE!')
    }
    componentWillUnmount(){
        console.log('Component Will UNMOUNT')
    }
}
export default Phase;
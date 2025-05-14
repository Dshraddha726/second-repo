import {Component} from "react";
const BtnColorContext = React.createContext('btn btn-darkyellow');
class Context1 extends Component{
    render (){
        return(
            <BtnColorcontext.Provider value="btn btn-info">
                <Button/>
            </BtnColorcontext.Provider>
        );

    }
}
function Button(props){
    return(
        <div className="container">

        </div>
    )
}
class ThemedButton extends Component {  
    
    static contextType = BtnColorContext;  
    render() {  
      return <button className={this.context} >  
        welcome to javatpoint  
      </button>;  
    }  
  }  
  export default Context1;  
import React from 'react';


/*function Bloc(props){
    return(
       <div>
           <h1>{props.title}</h1>
           <p>{props.description} </p>
       </div>
    );
}*/



class Bloc extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:props.title,
            description:props.description
        }

      console.log("constructor");
        
    }

    componentDidMount(){
        console.log("did mount");
    }

    componentWillMount(){
        console.log("will mount");
    }
    componentDidMount(){
        console.log("did mount");
        
    }


    componentDidCatch(){

    }

    componentDidUpdate(){
        
    }



    render(){
       console.log("render");
        return(
            <div >
                
                <h1>{this.state.title}</h1>
                <p>{this.state.description} </p>
            </div>
         );
    }
}


export default Bloc;
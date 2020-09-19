import React from 'react';
import Jaime from './Jaime';


class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:props.title,
            description:props.description,
            count:props.count,
            didLike:props.didLike,
            x:""
            
        }

        this.sendNewLikesToServer = this.sendNewLikesToServer.bind(this);
        
    }


    
  sendNewLikesToServer(newCount){
      console.log(newCount);

      this.setState({
          count:newCount,
          x:"the data was updated from the child"+newCount
      });
      
    console.log("i'm the parent, and i'm seding new data to server. ",this.state.count);
  }




    render(){
        console.log("i'm the parent, and i'm seding new data to server. 2",this.state.count);
        return(
            <div >
                <h1>{this.state.title}</h1>
                <p>{this.state.description} </p>
                <p>{ this.state.x }</p>
                <Jaime count={this.state.count} didLike={this.state.didLike} updateArticle={this.sendNewLikesToServer}  />

            </div>
         );
    }
}


export default Article;
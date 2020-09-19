import React from 'react';
class Add extends React.Component {

  constructor(props){
    super(props);
    this.state={
        input:"",
        isLoading:false,
        successMsg:""
    }
  }


  hundleChange(e){
    this.setState({
        input:e.target.value
    })
  }


  sendTodoToServer(e){
      e.preventDefault();
    console.log("sending data to server");

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"todo":this.state.input});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
this.setState({
    isLoading:true
})
fetch("http://localhost:8800/add", requestOptions)
  .then(response => response.text())
  .then((result) => {
    var res = JSON.parse(result);
    this.setState({
        isLoading:false,
        successMsg:res.message,
        input:""
    })
  })
  .catch(error => console.log('error', error));



  }



  render(){
    return (
        <div>
            <div className="container">
                <strong> back to home page </strong>
                <h1>Add new todo</h1>
                <form action="">
                <div className="form-group">
                        <label htmlFor="">Todo description</label>
                        <input type="text" className="form-control" value={this.state.input} onChange={ (e)=> { this.hundleChange(e) } }  />
                    </div>
                    <div className="form-group">
                        {
                            this.state.input !== "" ? 
                            <button  className="btn btn-primary" onClick={(e)=>{this.sendTodoToServer(e)}}>ADD</button> :
                            <div></div>
                        }
                    </div>
                </form>
                {
                    this.state.isLoading === true ?
                    <div><h3><strong>Is loading...</strong></h3></div>: <div>
                        {
                            this.state.successMsg !=="" ?
                            <div className="alert alert-success">
                                { this.state.successMsg }
                            </div>
                            :
                            <div></div>
                        }

                    </div>
                }

            </div>
        </div>
    );
  }
}

export default Add;
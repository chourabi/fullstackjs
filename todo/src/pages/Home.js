import React from 'react';
class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
        todos:[]
    }
  }

  componentDidMount(){
      this.getAllTodos();
  }


  getAllTodos(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8800/list", requestOptions)
      .then(response => response.text())
      .then((result) => {
          var res = JSON.parse(result);
          this.setState({
              todos:res.todos
          })

      })
      .catch(error => console.log('error', error));
  }


  checkTodo(todo){
    console.log(todo);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"todo":todo.todo});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8800/update", requestOptions)
  .then(response => response.text())
  .then(result => this.getAllTodos())
  .catch(error => console.log('error', error));
  }


  render(){
    return (
        <div>
            <div className="container">
                <div className="my-5">
                    <h3>List to-do</h3>
                    <hr/>
                </div>
                <div className="list">
                {
                        this.state.todos.map((todo)=>{
                           return(
                            <div>
                            <h6>{todo.todo}</h6>
                                {
                                    todo.ischecked === false ?
                                    <button onClick={ ()=>{ this.checkTodo(todo) } } className="btn btn-sm btn-primary">complete</button>:
                                    <div>
                                        <strong>completed</strong>
                                    </div>
                                }
                            </div>

                           );
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default Home;

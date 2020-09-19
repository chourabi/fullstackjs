import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      articles:[],
      isLoading:true,
      error:false
    }

    
  }


  getDataFromServer(){
    fetch('https://yts.mx/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        this.setState({
            articles:json.data.movies,
            isLoading:false,
            error:false
        })
    }).catch((e)=>{
        console.log(e);
        
        this.setState({
            isLoading:false,
            error:true
        })
    })
  }


  componentDidMount(){
     this.getDataFromServer();
  }

  render(){
    return (
      <div>
          <h1>Home page</h1>
          <h3>Nos articles</h3>
          {
              this.state.isLoading === true ?
              <h3>Loading...</h3>
              :
              <div>
                  {
                      this.state.error === false ?
                      <div>
                  {
                      this.state.articles.map((a)=>{
                        return(
                            <article  >
                                <h1> {a.title} </h1>
                                <p> { a.summary } </p>
                                <img onClick={ ()=>{ this.props.history.push('movie/'+a.id) } } src={a.large_cover_image} width={200} />
                            </article>
                        );
                      })
                  }
              </div>
              :
                <div><h3>Error something went wrong <span onClick={ ()=>{this.getDataFromServer();} } style={{color:'blue'}}>Try again</span> </h3></div>
                  }
              </div>
          }
      </div>
    );
  }

}

export default Home;

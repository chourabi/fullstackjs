import React from 'react';

class Movie extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      id:this.props.match.params.id,
      isLoading:true,
      error:false,
      movie:{}
    }

    
  }

  getMovieInformation(){
    fetch('https://yts.mx/api/v2/movie_details.json?movie_id='+this.state.id)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        this.setState({
            movie:json.data.movie
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
      this.getMovieInformation();
  }

  render(){
    return (
      <div>
          <h1> {this.state.movie.title} </h1>
          <p> { this.state.movie.description_full } </p>
          <img src = { this.state.movie.large_cover_image }/>
      </div>
    );
  }

}

export default Movie;

import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component{

  state = {
    searchInput: null,
  }

  onInputChange = (e) => {
    const searchInput = e.target.value;
    this.setState(()=>({searchInput}))

  }

  handleOnClick = (e) =>{
  	e.preventDefault();
    console.log(this.state.searchInput);
  		axios({
  		  method: 'post',
  		  url: 'http://localhost:3000/search',
  		  data: {
  		    input : this.state.searchInput
  		  }
  		}).then((response)=>{
  		    	console.log(response.data, 'saved responseee')

  		    })
  		    .catch(function(err){
  		      console.log(err, 'error!! try again');
  		    });
  }

  render(){

  	return(
  		<div>
        <input type="text" onChange={this.onInputChange}/>
        <button onClick={this.handleOnClick}>Search</button>
  		</div>
  	);
  }

}

export default Dashboard;

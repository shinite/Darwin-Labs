import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component{

  state = {
    searchInput: null,
  }

  onInputChange = (e) => {
    const searchInput = e.target.value.toLowerCase();
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
  		<div className="content-container ">
        <div className="input-group">
          <div className="input-group__item">
            <input className="text-input" type="text" onChange={this.onInputChange}/>
          </div>
          <div className="input-group__item">
            <button className="button " onClick={this.handleOnClick}>Search</button></div>
          </div>
  		</div>
  	);
  }

}

export default Dashboard;

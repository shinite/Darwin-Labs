import React from 'react';
import axios from 'axios';

class ViewImages extends React.Component{

  componentWillMount(){
    console.log("mounted  view  images");

    axios({
      method: 'post',
      url: 'http://localhost:3000/getImages',
      data: {
        input : this.props.match.params.keyword
      }
    }).then((response)=>{
          console.log(response.data, 'saved responseee')

        })
        .catch(function(err){
          console.log(err, 'error!! try again');
        });
  }

  render(){
  console.log(this.props.match.params.keyword);
  	return(
  		<div>
        Post Images Here
  		</div>
  	);
  }

}

export default ViewImages;

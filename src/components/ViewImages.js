import React from 'react';
import axios from 'axios';
var imagesPath = []
//import image1 from "../../server/images/hermione/hermione1.jpeg"
class ViewImages extends React.Component{

  componentWillMount(){
    console.log("mounted  view  images");
    for(var i = 0; i<2;i++)
	{
     imagesPath.push(`/server/images/${this.props.match.params.keyword}/${this.props.match.params.keyword}${i}.jpeg`)
    	}
    console.log(imagesPath);
  }

  render(){
	var displayImage = imagesPath.map((data, index)=> <div key={index}><img src={data}/></div>)
  console.log(this.props.match.params.keyword);
  	return(
  		<div>
        	<img src='/hermione1'/>
  		</div>
  	);
  }

}

export default ViewImages;

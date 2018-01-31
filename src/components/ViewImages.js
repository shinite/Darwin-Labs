import React from 'react';
import axios from 'axios';
var imagesPath = []
//import image1 from "../../server/images/hermione/hermione1.jpeg"
class ViewImages extends React.Component{


  componentWillMount(){
    console.log("mounted  view  images",this.props.match.params.keyword);
	imagesPath = [];
    for(var i = 0; i<15;i++)
	{
    imagesPath.push(`/images/${this.props.match.params.keyword}/${this.props.match.params.keyword}${i}.jpeg`)
    	}
    console.log(imagesPath);
  }

  render(){
	var displayImage = imagesPath.map((data, index)=><img className="images-edit" key={index}src={data}/>)
  console.log(this.props.match.params.keyword);
  	return(
  		<div className = "images-display">
        	{displayImage}
  		</div>
  	);
  }

}

export default ViewImages;

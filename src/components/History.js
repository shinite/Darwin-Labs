import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';



class History extends React.Component{

  state = {
    wordList:[]
  }

  componentWillMount(){
    console.log("mounted");

    axios.get('http://localhost:3000/getData')
      .then( (response)=> {
        console.log(response.data,"data from viewDb");

        this.setState({wordList: response.data, error:false})
       })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    var printList = this.state.wordList.map((data,index) => <p key={index}><NavLink to={"/images/"+data.word}  className="button display--link">{data.word}</NavLink></p>)
    //console.log( this.state.wordList[0],"printLIst");
  	return(
  		<div>
        {printList}
  		</div>
  	);
  }

}

export default History;

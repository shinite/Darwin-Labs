import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class History extends React.Component{

  state = {
    wordList:[]
  }

  componentWillMount(){
    console.log("mounted");

    axios.get('/getData')
      .then((response)=> {
        console.log(response);
        this.setState(()=>({wordList:response.data}))
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("mount done")
  }

  render(){
    var printList = this.state.wordList.map((data,index) => <p key={index}><NavLink to={"/images/"+data.word}  className="button display--link">{data.word}</NavLink></p>)

  	return(
  		<div>
        {printList}
  		</div>
  	);
  }

}

export default History;

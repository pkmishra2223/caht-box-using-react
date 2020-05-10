import React,{Component} from 'react';
import Comp1 from './Comp1';
import 'tachyons';
import './index.css'
class Chat extends Component{
	constructor(){
		super();
		this.state={
			name:"WELCOME TO PK WORLD"
		}

	}
	  change(){
this.setState({
	name:"WELCOME TO PK KINGDOM"
})
	}
	render(){

	return (

<div>

<div className= "message">
	<div>{<Comp1 id="1" name="Prakhar"/ >}</div>
	<Comp1 id="1" name="shivam" />
	
	<Comp1 id="1" name="salman" />
	<Comp1 id="1" name=" yash " />
	</div>
		<button className="but" onClick = {()=>this.change()}> A CHAT BOX BY PRAKHAR MISHRA</button>
	</div>
	)

		}
		}
export default Chat; 
import React from 'react';
import Normal from '../Images/Normal.jpg';
import Spell from '../Images/Spell.png';
import Ritual from '../Images/Ritual.png';
import Trap from '../Images/Trap.png';
import Special from '../Images/Special.png';
import Stars from '../Images/Star.png';


export default class CardUI extends React.Component{
 
  

  componentDidUpdate(){
console.log("updated")

  }
  
  


state={
  imgBackground:Normal,
title:'Title',
starsState:'',
description:'',
attack:'',
defense:'',
year:'',
firstedition:'checked',
value:'',
StarsVariable:'0',
selectedFile:null
};

starsdata=(event)=>{
 
  this.setState({StarsVariable:event.target.value});



  }

  
 
handleChange=(e)=>{
//GET THE VALUE OF THE OPTIONS
this.setState({value:e.target.value});


}



submit=(e)=>{
  e.preventDefault();
  console.log(this.state.value);



  if(this.state.value==="Normal"){
    this.setState({imgBackground:Normal})
  
  }
  else if(this.state.value==="Spell"){
    this.setState({imgBackground:Spell})
  }
  else if(this.state.value==="Ritual"){
    this.setState({imgBackground:Ritual})
  }
  else if(this.state.value==="Trap"){
    this.setState({imgBackground:Trap})
  }
  else if(this.state.value==="Special"){
    this.setState({imgBackground:Special})
  }
}

updateTitle=(e)=>{

this.setState({title:e.target.value});





}

updateAttack=(e)=>{



  if(e.target.value>9999 ||e.target.value<0 ){
    alert("Between 0 and 9999 only");
    this.setState({attack:'0'});
    }

else{
this.setState({attack:e.target.value});
}

}

updateDefense=(e)=>{
  if(e.target.value>9999 ||e.target.value<0 ){
    alert("Between 0 and 9999 only");
    this.setState({defense:'0'});
    }

else{
this.setState({defense:e.target.value});
}


}




 





render(){
return(
    <div>
      <form onSubmit={this.submit}>
     <select onChange={this.handleChange} className="Select">

<option value="Normal">Normal</option>


<option value="Special">Special</option>


<option value="Trap">Trap</option>


<option value="Ritual">Ritual</option>


<option value="Spell">Spell</option>
     </select>

     
    
    <label>Level</label><input id="stars" type="number" max="8" onChange={this.starsdata}></input>
 
    
    <input type="text" value={this.state.title} maxLength="15" onChange={this.updateTitle}></input>
    <label>Attack</label><input value={this.state.attack} type="number" min="0" max="9999" onChange={this.updateAttack}></input>
    <label>Defense</label><input value={this.state.defense} type="number" min="0" max="9999" onChange={this.updateDefense} type="number"></input>
    <label>Year</label><input type="number"></input>
    <input type="checkbox"></input>
    
    <button onSubmit={this.submit}>send</button>
    </form>








{




(this.state.value==="Normal")?<img id="cardBg" className="cardBG" src={this.state.imgBackground}/>:
(this.state.value==="Ritual")?<img id="cardBg" className="cardBG" src={this.state.imgBackground}/>:
(this.state.value==="Spell")?<img id="cardBg" className="cardBG" src={this.state.imgBackground}/>:
(this.state.value==="Special")?<img id="cardBg" className="cardBG" src={this.state.imgBackground}/>:
<img id="cardBg" className="cardBG" src={this.state.imgBackground}/>


}
<h3 className="title" id="Title" >{this.state.title}</h3>
{

(this.state.StarsVariable==="1")?<img id="stars" className="stars" src={Stars}/>:
(this.state.StarsVariable==="2")?<div><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/></div>:
(this.state.StarsVariable==="3")?<div><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/></div>:
(this.state.StarsVariable==="4")?<div><img id="stars" className="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/></div>:
(this.state.StarsVariable==="5")?<div><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/></div>:
(this.state.StarsVariable==="6")?<div><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/></div>:
(this.state.StarsVariable==="7")?<div><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/></div>:
(this.state.StarsVariable==="8")?<div><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img className="stars" id="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/><img id="stars" className="stars" src={Stars}/></div>:
<div></div>
  }
<img id="poster" src=""/>
<p id="description"></p>

<p id="attack">{this.state.attack}</p>

<p id="defense">{this.state.defense}</p>




</div>


)}}




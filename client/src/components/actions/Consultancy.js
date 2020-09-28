import React, { Component } from '../../../../node_modules/@types/react'
import {Link} from '../../../../node_modules/react-router-dom';
import axios from "../../../../node_modules/axios";
import "./TaskMembers.css";
var store = require('store')
export class Consultancy extends Component {
  getStyle = () =>{
return{
  background : '#242424',
  pading : '10px',
   testAlign:'left'
}
  }
  async handleClick() {
   if(this.props.bool){
    const id=this.props.task.projectPartner.id
    console.log(id)

    const data = {
      consultancyAgencyId: this.props.consultancy.id,
      projectId:this.props.task._id
    };
    console.log(data)
    await axios.put(
      `https://hakunamatatasite.herokuapp.com/api/partners/assignConstlancyAgencyToProject/${id}`,
      data
    );}else{
      const id=this.props.task.taskPartner.id
    console.log(id)

    const data = {
      consultancyAgencyId: this.props.consultancy.id,
      taskId:this.props.task._id
    };
    console.log(data)
    await axios.put(
      `https://hakunamatatasite.herokuapp.com/api/partners/assignConstlancyAgencyToTask/${id}`,
      data
    );
    }
  }
  getMembers(){
  if(this.props.bool){
     if(store.get('payload').tags.includes('Partner')&&store.get('payload').id==this.props.task.projectPartner.id){
      return (
        <div>
          <Link
            to={'/users/'+this.props.consultancy.id}
            style={{ color: "black" }}
          >
            {this.props.consultancy.name}
          </Link>
          <button className="Btn" onClick={this.handleClick.bind(this)}>
            Accept
          </button>
        </div>
      );     
    }
    else{
      return <Link
            to={'/users/'+this.props.consultancy.id}
            style={{ color: "black" }}
          >
            {this.props.consultancy.name}
          </Link>
    }
  }else{
    if(store.get('payload').tags.includes('Partner')&&store.get('payload').id==this.props.task.taskPartner.id){
      return (
        <div>
          <Link
            to={'/users/'+this.props.consultancy.id}
            style={{ color: "black" }}
          >
            {this.props.consultancy.name}
          </Link>
          <button className="Btn" onClick={this.handleClick.bind(this)}>
            Accept
          </button>
        </div>
      );     
    }
    else{
      return <Link
            to={'/users/'+this.props.consultancy.id}
            style={{ color: "black" }}
          >
            {this.props.consultancy.name}
          </Link>
    }

  }

}
   
    render() {
    
      return (
        
      
     <div style={{ background: "white" }}>
     {this.getMembers()}
    
   </div>
    )
  }
}
export default Consultancy

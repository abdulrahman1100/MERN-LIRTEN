import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TaskMembers.css";
var store = require("store");
export class AppliedCourse extends Component {
  
    async handleClick() {
        if(store.get('payload').id==this.props.id){
        const id = this.props.id
        const masterClassId = this.props.masterClass._id
       
         const data = {
           masterClassId: masterClassId,
           memberId:this.props.apply.id,
           state:true
         };
         console.log(data.memberId)
         await axios.put(`https://hakunamatatasite.herokuapp.com/api/educationalOrganizations/acceptMemberInMasterClass/${id}`, data);
         window.location.reload(); 
        }else{
            return 
        }
       }
       async handleClickReject() {
        if(store.get('payload').id==this.props.id){ 
        const id = this.props.id
         const masterClassId = this.props.masterClass._id
         
         const data = {
           masterClassId: masterClassId,
           memberId:this.props.apply.id,
           state:false
         };
         await axios.put(`https://hakunamatatasite.herokuapp.com/api/educationalOrganizations/acceptMemberInMasterClass/${id}`, data);
         window.location.reload(); 
       }else{
           return
       }
    }
      getMembers() {
          console.log(store.get('payload').id)
          console.log(this.props.id)
        if(store.get('payload').id==this.props.id){
    console.log( this.props.apply)
    console.log( this.props.apply)
    console.log( this.props.apply)

    
      return (
        <div>
          <Link 
            to={`/users/${this.props.apply.id}`}
            style={{ color: "black" }}
          >
            {this.props.apply.name}
          </Link>
          <button  onClick={this.handleClick.bind(this)}>
              Accept
          </button>
          
          <button  onClick={this.handleClickReject.bind(this)}>
              reject
          </button>
        </div>
      );
     }else{   return (
        <div>
          <Link
            to={`/users/${this.props.apply.id}`}
            style={{ color: "black" }}
          >
            {this.props.apply.name}
          </Link>
        </div>
      );   
     }
    }
  
  render() {
    return <div style={{ background: "white" }}>{this.getMembers()}</div>;
  }
}

export default AppliedCourse;

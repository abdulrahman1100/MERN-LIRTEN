import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import {Card, Dropdown,DropdownButton,ButtonGroup,CardDeck,Button} from "react-bootstrap";
import swal from 'sweetalert';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks:[],
          projects:[],
          adminId:'5cb503918d1e8f08e9af707b'
        }
      }
    componentDidMount(){
        console.log('here')
        axios
        .get(`https://hakunamatatasite.herokuapp.com/api/admins/tasks/all`)
        .then(res =>{ this.setState({ tasks: res.data.data })
            console.log(res.data.data)
    })
        axios
        .get(`https://hakunamatatasite.herokuapp.com/api/admins/projects/all`)
        .then(res => {this.setState({ projects: res.data.data })
        console.log(res.data.data)
    })
    }
    handleDelete(id){
        axios.put(`https://hakunamatatasite.herokuapp.com/api/projects/edit/${id}/${this.state.adminId}`,{
            acceptancy:false
        }).then(res =>{
        swal({
            title: "Done",
            text: res.data.msg,
            icon: "success",
          })
          window.location.href =`https://hakunamatatasite.herokuapp.com/adminPage`
        }
        ).catch(e => {
            swal({
                title: "Oh",
                text: e,
                icon: "error",
              })
        });
    }
    handleAccpet(id){
        axios.put(`https://hakunamatatasite.herokuapp.com/api/projects/edit/${id}/${this.state.adminId}`,{
            acceptancy:true
        }).then(res =>{
        swal({
            title: "Done",
            text: res.data.msg,
            icon: "success",
          })
          window.location.href =`https://hakunamatatasite.herokuapp.com/adminPage`
        }
        ).catch(e => {
            swal({
                title: "Oh",
                text: e,
                icon: "error",
              })
        });
    }
    handleDeleteTask(id){
        axios.put(`https://hakunamatatasite.herokuapp.com/api/tasks/edit/${id}/${this.state.adminId}`,{
            acceptancy:false
        }).then(res =>{
        swal({
            title: "Done",
            text: res.data.msg,
            icon: "success",
          })
          window.location.href =`https://hakunamatatasite.herokuapp.com/adminPage`
        }
        ).catch(e => {
            swal({
                title: "Oh",
                text: e,
                icon: "error",
              })
        });
    }
    handleAccpetTask(id){
        axios.put(`https://hakunamatatasite.herokuapp.com/api/tasks/edit/${id}/${this.state.adminId}`,{
            acceptancy:true
        }).then(res =>{
        swal({
            title: "Done",
            text: res.data.msg,
            icon: "success",
          })
          window.location.href =`https://hakunamatatasite.herokuapp.com/adminPage`
        }
        ).catch(e => {
            swal({
                title: "Oh",
                text: e,
                icon: "error",
              })
        });
    }
    getRow(){
    let returnedData=[]
    if(this.state.tasks!=undefined)
     this.state.tasks.map((task)=>{
            returnedData.push(
                <Card key={task._id}>
                <Card.Body>
                  <Card.Title>{task.name}</Card.Title>
                  {task.description}

                  <div style={{
                    position:'absolute',
                    right:10
                  }}>
                  <Link to={`/tasks/${task._id}`} style={{ color: "black" }}>
                  View
                  </Link>
                  </div>
                </Card.Body>
                <br></br>
                <Card.Footer>
                    <Button variant="dark"  onClick={() => this.handleAccpetTask(task._id)}>Accept </Button>
                    <Button variant="danger"  onClick={() => this.handleDeleteTask(task._id)}>Reject </Button>
                </Card.Footer>
              </Card>
              )
        })
        if(this.state.projects!=undefined)
        this.state.projects.map((project)=>{
            returnedData.unshift(
                <Card key={project._id}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  {project.description}
                  <div style={{
                    position:'absolute',
                    right:10
                  }}>
                  <Link to={`/projects/${project._id}`} style={{ color: "black" }}>
                  View
                  </Link>
                  </div>
                </Card.Body>
                <br></br>
                <Card.Footer>
                <Button variant="dark" onClick={() => this.handleAccpet(project._id)}>Accept </Button>
                    <Button variant="danger"  onClick={() => this.handleDelete(project._id)}>Reject </Button>
                </Card.Footer>
              </Card>
              )
        })

      
      return  returnedData
      }
  render() {
    return (
<Card>
<Card.Header>

  </Card.Header>
  <Card.Body>
  {
    this.getRow()
  }
  
  </Card.Body>
</Card>
    );
  }
}
export default AdminPage;

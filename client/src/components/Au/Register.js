import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import faceplam from '../../assessments/faceplam.png'
import {registerUser} from '../../globalStore/actions/authActions'
class Register extends Component {
    constructor(){
        super();
        this.state={
          displayedName:'',
          email:'',
          password:'',
          password2:'',
          errors:{}
        }
    }

    // componentDidMount(){
    //   if(this.props.auth.isAuthenticated){
    //      this.props.history.push('./verificationpage');
    //   }
    // }

      componentWillReceiveProps(nextProps){
        if(this.props.auth.isAuthenticated){
          window.location.href="https://hakunamatatasite.herokuapp.com/verificationpage"
               }
        if(nextProps.errors){
          this.setState({errors:nextProps.errors})
        }
      }

     onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.password!==this.state.password2)
        swal({
          title: 'enter the same passwords',
          showConfirmButton: false, 
           imageUrl: '../../assessments/faceplam.png',
        })
        else{
        const newUser = {
          displayedName:this.state.displayedName,
          email:this.state.email,
          password:this.state.password,

        }
        this.props.registerUser(newUser,this.props.history);
      }
    }
  render() {

    const { errors } = this.state;
    
    return (
        <div className="register">
        
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your  account</p>

          <form noValidate onSubmit={this.onSubmit}>

     <div className="form-group">
                  <input type="email" className={classnames('form-control form-control-lg',{'is-invalid':errors.email
                  })} placeholder="Email Address" name="email" value={this.state.email} 
                  onChange={this.onChange}
                  />
              </div>
              <div className="form-group">
                  <input type="tex" className={classnames('form-control form-control-lg')} placeholder="Displayed Namd" name="displayedName" value={this.state.displayedName} 
                  onChange={this.onChange}
                  />
              </div>


              <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg',{'is-invalid':errors.password
                  })} placeholder="Password" name="password" value={this.state.password}
                  onChange={this.onChange}
                  />

              </div>


            
              
              <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg',{'is-invalid':errors.password2
                  })} placeholder="Confirm Password" name="password2" value={this.state.password2}
                  onChange={this.onChange}
                  />
                  {/* {errors.password2 &&(<div className="invalid-feedback">{errors.password2}</div>)} */}
               </div>
          <input type="submit" className="btn btn-lg btn-light" value ="SIGNUP" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
// Register.propTypes = {
//   registerUser:PropTypes.func.isRequired,
//   auth:PropTypes.object.isRequired
//   // errors:PropTypes.object.isRequired
// }

const mapStateToProps = (state)=>({
  auth:state.auth,
  errors:state.errors

});


export default connect(mapStateToProps,{registerUser})(withRouter(Register));



//////////////////////// staaaaaaaaaaart 















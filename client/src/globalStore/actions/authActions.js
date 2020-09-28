import axios from '../../../../node_modules/axios';
import setAuthToken from '../../utils/setAuthToken';
import {GET_ERRORS, SET_CURRENT_USER} from './types'
import jwt_decode from '../../../../node_modules/jwt-decode/lib';
  //register user 

   export const registerUser = (userData,history)=> dispatch =>{
       //console.log(userData)
      axios
        .post('https://hakunamatatasite.herokuapp.com/api/users/register',userData)
        .then(res=>{
            alert('Done')
           window.location.href="https://hakunamatatasite.herokuapp.com/verificationpage"})
        .catch(err=>{
            alert(err.response.data.msg)
            dispatch({type:GET_ERRORS, payload:err.response.data})}
    );
};
export const verifyUser = (userData)=> dispatch =>{
    //console.log(userData)
    axios.post('https://hakunamatatasite.herokuapp.com/api/users/verify',{secretToken:userData})
    .then(res => {
        dispatch(setCurrentUser(res.data.user.user));
         window.location.href='https://hakunamatatasite.herokuapp.com/startAs'
    
        }).catch(e=>{
          alert(e.response.data)

        })
};

//LOG IN GET THE TOKEN  
export const loginUser = userData => dispatch =>{
    axios.post('https://hakunamatatasite.herokuapp.com/api/users/login',userData)
    .then(res => {
        //now save the token to a local storage
     const {token ,data} = res.data ;   
     console.log(res.data)
     //now setting the token to local storage 
     localStorage.setItem('jwtToken',token);
     // set token to Auth header
     setAuthToken(token);
     // now we have the user data so to decode this we need to install module (jwt decode ) 
     //decode token to get the user 
     const decoded =jwt_decode(token);
     localStorage.setItem('payload',decoded.id);
     //console.log(decoded)

     // now decoded has the user data 
     //set the current user 
     dispatch(setCurrentUser(data));
     
     
    })
    .catch(err=>{
        alert(err.response.data.msg)
        dispatch({
            type:GET_ERRORS,
            payload:err
    })}
    );
};

//SET LOGGED IN USER 
export const setCurrentUser = ( decoded )=>{
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

// LOG USER OUT 
export const logoutUser = ()=>
    dispatch=>{
        //remove the token from local storage 
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('state');
        //remove the auth header for coming requests 
        setAuthToken(false)
        //set the current user to {} an empty object 
        dispatch(setCurrentUser({}))
    }

// export const verifyUser = (userData,history) => dispatch=>{
//     axios.post('https://hakunamatatasite.herokuapp.com/api/users/verify',userData)
//     .then(res=>history.push('/login2'))
//     .catch(err=> dispatch({type:GET_ERRORS, payload:err.response.data})
// );
// }

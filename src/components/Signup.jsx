
import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contextApi/AuthContext';


const Signup = () => {

    const [userid, setUserid] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const {createUser} = UserAuth()

    const navigate = useNavigate()

   

    const onSubmit = async (e) => {
        e.preventDefault();
     
        setError('')
        try {
            await createUser(userid, email, password,error);
            console.log('here');
            navigate('/confirmation')
        } catch(error) {
            setError(error.message);
            console.log(error.message);
            console.log('info',email,userid,password);
            console.log('info types',typeof email,typeof userid,typeof password);
        }
    }
    



  return (
<>
    <form onSubmit ={onSubmit}>
        <div className="form-group">
      <label htmlFor="userId">User ID</label>
      <input onChange = {(e)=> setUserid(e.target.value)}type="text" className="form-control" id="userid" placeholder="Enter User Id" />
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input onChange = {(e)=> setEmail(e.target.value)}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input onChange = {(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    
    </form>
    Already Have an account then <Link to="/signin">Sign In</Link>
    
  </>
  )
}

export default Signup




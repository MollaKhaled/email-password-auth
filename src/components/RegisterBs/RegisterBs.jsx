import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterBs = () => {
  return (
    <div>
   <form>
  <div className="mb-3 w-50 ps-2">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3 w-50 ps-2">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className='btn btn-primary'>Register</button>
</form>
   </div>
  );
};

export default RegisterBs;
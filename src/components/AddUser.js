import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const {register,handleSubmit,reset,formState:{errors}}= useForm();
    const saveUser=(data)=>{
        console.log(data);
    }



    return (
        <div className='container'>         
        <div className='col-xs-12 col-sm-10 offset-sm-1 p-sm-5 '>
            <form className='form-control m-2 p-3' onSubmit={handleSubmit(saveUser)}>
                     <div className='row mb-3'>
                        <div className='col-sm-9 m-auto'><input type="text"{...register("firstName",{required:true})} placeholder="Enter FirstName" class="form-control" /></div>
                    {errors.firstName && <span className='text-danger'>First Name is required</span>}
                    </div>
                     <div className='row mb-3'>
                       <div className='col-sm-9 m-auto'><input type="text"{...register("lastName",{required:true})} placeholder="Enter LastName" class="form-control" /></div>
                     </div>
                     <div className='row mb-3'>
                           <div className='col-sm-9 m-auto'><input type="text"{...register("email",{required:true})} placeholder="Enter Email" class="form-control" /></div>
                     </div>
                     <div className='row mb-3'>
                           <div className='col-sm-9 m-auto'><input type="text"{...register("userName",{required:true})} placeholder="Enter UserName" class="form-control" /></div>
                     </div>
                     <div className='row mb-3'>
<                          div className='col-sm-9 m-auto'><input type="password"{...register("password",{required:true})} class="form-control" placeholder="Enter password"/></div>
                    </div>
                    <button type='submit' className='btn btn-primary m-2'>Add</button>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>

    );
};

export default AddUser;
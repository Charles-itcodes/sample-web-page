import UserService from "../services/UserService";
import React, {useEffect, useState } from 'react';

const AdminComponent = () => {

 const [users,setUsers]= useState([]);
 const [message,setMessage]=useState({value:"",type:""});

 useEffect(()=>{
const service = new UserService();

service.getAllUsers().then((response)=>{
    console.log(response);
    if (response.status ===200) {
        setUsers(response.data);
        setMessage({value:"Operation is Done Fetched All Users From Backend API",type:"success"});
    } else {
        setMessage({value:"Failed",type:"danger"}); 
    }
})
 },[]);

    const Table=()=>{

        const TableHeader = ()=> {
            return (
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                )
        };
        const TableAction =()=>{
            return(
        <div className=''>
        <button type="button" className="btn btn-primary">Details</button>
        <button type="button" className="btn btn-danger m-2">Delete</button>
        <button type="button" className="btn btn-warning">Edit</button>
        </div>
            );
        };

const TableRow = ()=> {
    return (
        <tbody>
           {
            users.map( (user)=> (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.userName}</td>
                    <td>{user.password}</td>
                    <td><TableAction/></td>
                </tr>
            ))   
           }                     
        </tbody>
    )
};
        return(
        <div className="container">
                <table className="table table-striped">
                    <TableHeader/>
                    <TableRow />
                </table>
        </div>
        );
    };

        
return(
<div className="container">
    <br/>
<h5 className='text-center'>LIST OF USERS</h5>
<br/>
{message && <div className={'alert alert-' + message.type}>{message.value}</div> }
<Table/>
</div>
);

};

export default AdminComponent;
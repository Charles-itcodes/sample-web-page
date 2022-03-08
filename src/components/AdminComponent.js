import UserService from "../services/UserService";
import React, {useEffect, useState } from 'react';

const AdminComponent = () => {

 const [users,setUsers]= useState([]);

 useEffect(()=>{
const service= new UserService();

service.getAllUsers().then((response)=>{
    console.log(response);
    if (response.status ===200) {
        setUsers(response.data);
    } else {
      // error message  
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
        <button type="button" className="btn btn-primary">Add</button>
        <button type="button" className="btn btn-danger m-2">Delete</button>
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
<h5 className='text-center'> USER DETAILS</h5>
<Table/>
</div>
);

};

export default AdminComponent;
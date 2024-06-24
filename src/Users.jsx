import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadUsers =  useLoaderData()
    const [users,setUsers] = useState(loadUsers)
    let num =1;
    const handleDelete = id =>{
       console.log(id)
       const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
        //  
        fetch(`http://localhost:5000/users/${id}`,
            {
                method:"delete",
                // headers:{
                //     "content-type":"application/json"
                // },
                // body:JSON.stringify(coffee)
            }
        )
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                      });
                const remaining = users.filter(user=>user._id !== id)
                setUsers(remaining)      
            }
        })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "User is safe :)",
            icon: "error"
          });
        }
      });
    }
    return (
        <div>
            <h1>This is User site {loadUsers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Email</th>
                      <th>Arrived At</th>
                      <th>Last Logged At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {users.map(user=> <tbody key={user._id}>
                    {/* row 1 */}
                    <tr>
                      <th>{num++}</th>
                      <td>{user.email}</td>
                      <td>{user.createdId}</td>
                      <td>{user.lastLoggedAt}</td>
                      <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
                      
                    </tr>
                  </tbody>)}
                 
                </table>
              </div> 
            
        </div>
    );
};

export default Users;
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Card = ({coffee, coffees, setCoffees}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}= coffee;

const handleDelete=_id=>{
    console.log(_id)
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
        fetch(`http://localhost:5000/coffee/${_id}`,
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
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                const remaining = coffees.filter(coff=>coff._id !== _id)
                setCoffees(remaining)      
            }
        })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Coffee is safe :)",
            icon: "error"
          });
        }
      });

}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-4">
  <figure><img src={photo} alt="Coffee"/></figure>
  <div className="flex justify-between w-full">
    <div className="py-4">
    <h2 className="card-title">{name}</h2>
    <p>{supplier}</p>
    <p>{category}</p>
    <p>{taste}</p>
    </div>

    <div className="join join-vertical space-y-6 pr-4 py-4  ">
      
      <button className="btn  join-item">View</button>
      
<Link to={`updateCoffee/${_id}`}><button className="btn  join-item">Edit</button></Link>   
   <button onClick={()=>handleDelete(_id)} className="btn  join-item bg-orange-600">X</button>
      </div>

    </div>
  </div>
</div>
        
    );
};

export default Card;
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)
//send data to the server
fetch("http://localhost:5000/coffee",{
    method:'POST',
    headers:{
        "content-type": "application/json"
    },
    body:JSON.stringify(newCoffee)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success',
            text: 'User Added',
            icon: 'success',
            confirmButtonText: 'Done'
          })
          form.reset()
    }
})
    }
    return (
        <div className="bg-[#f4f3f0] p-20">
     <h1 className='text-3xl font-extrabold text-purple-600'>Add a Coffee</h1>
     <form onSubmit={handleAddCoffee}>
        {/* form row 1 */}
        <div className="md:flex gap-4 my-8 ">
            <div className="form-control w-1/2">
                <label className="label" >
                    <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name="name" className="input input-bordered w-full" placeholder="Coffee name" />
                </label>
            </div>
            <div className="form-control w-1/2">
                <label className="label" >
                    <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                    <input type="text" name="quantity" className="input input-bordered w-full" placeholder="Available Quantity" />
                </label>
            </div>
        </div>
        {/* form row 2 */}
        <div className="md:flex gap-4 mb-8 ">
            <div className="form-control w-1/2">
                <label className="label" >
                    <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name="supplier" className="input input-bordered w-full" placeholder="Supplier Name" />
                </label>
            </div>
            <div className="form-control w-1/2">
                <label className="label" >
                    <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                    <input type="text" name="taste" className="input input-bordered w-full" placeholder="Taste" />
                </label>
            </div>
        </div>
        {/* form row 3*/}
        <div className="md:flex gap-4 mb-8 ">
            <div className="form-control w-1/2">
                <label className="label" >
                    <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                    <input type="text" name="category" className="input input-bordered w-full" placeholder="Category" />
                </label>
            </div>
            <div className="form-control w-1/2">
                <label className="label" >
                    <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                    <input type="text" name="details" className="input input-bordered w-full" placeholder="Details" />
                </label>
            </div>
        </div>
        {/* form photo url */}
        <div className="form-control w-full mb-8">
                <label className="label" >
                    <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                    <input type="text" name="photo" className="input input-bordered w-full" placeholder="Photo URL" />
                </label>
            </div>
 <input type="submit" value="Add Coffee" className="btn  btn-block"/>
     </form>
        </div>
    );
};

export default AddCoffee;
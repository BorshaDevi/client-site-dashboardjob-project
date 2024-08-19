import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const DashboardForm4 = ({category}) => {
  console.log(category)
  const handleConfirm=async e=>{
    e.preventDefault()
    const widgetName=e.target.widgetName.value;
    const text=e.target.text.value
    const widgets={
      widgetName:widgetName,
      text:text,
      category:category,
    }
   const res=await axios.post('https://dashboard-job-project.vercel.app/widget',widgets)
   if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: widgetName,
      showConfirmButton: false,
      timer: 1500
    });
    
    
   }
    
}
    return (
        <div>
           <form onSubmit={handleConfirm} >
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='widgetName' className="input " required />
        </div>
        <div className="form-control">
          <label className="text">
            <span className="label-text">Text</span>
          </label>
          <input type="text" placeholder="text" name='text' className="input " required />
        </div>
        <div className='justify-end'>
                    
                <input type="submit" className='bg-indigo-600 btn text-white border ' value='Confirm' /> 

    </div>           
            </form>  
        </div>
    );
};

export default DashboardForm4;
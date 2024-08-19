import axios from 'axios';
import React from 'react';

const CrossButton = ({id,refetch}) => {
  console.log(id)
  
    const handleDelete=async()=>{
      const data=await axios.delete(`https://dashboard-job-project.vercel.app/widgetDelete/${id}`)
      console.log(data)
      if(data.data.deletedCount){
        refetch()
      }
       
    }
    return (
        <div>
            <div className="card-actions justify-end">
      <button onClick={handleDelete} className="btn btn-square btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
        </div>
    );
};

export default CrossButton;
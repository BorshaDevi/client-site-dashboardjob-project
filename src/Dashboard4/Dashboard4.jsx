import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import CrossButton from '../Components/CrossButton/CrossButton';

const Dashboard4 = ({ticket}) => {
  const {category}=ticket
  const {data : ticke , refetch}= useQuery({
    queryKey:['ticke'],
    queryFn:async()=>{
      const data=await axios.get('https://dashboard-job-project.vercel.app/cardWidget')
      console.log(ticke)
     
      return data.data
      
    }
  })
  const tickeCollection=ticke?.filter(cs => cs.category === category)
  console.log(tickeCollection)
    return (
        <div className='mt-3 flex'>

<div className='flex'>
          {
           tickeCollection?.map(csp=> <div key={csp._id}>
              <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <CrossButton id={csp._id} refetch={refetch}></CrossButton>
    <h2 className="card-title">{csp.widgetName}</h2>
    <p>{csp.text}</p>
   
  </div>
</div>
            </div>)
          }
        </div>
            
        <div className="card bg-base-100 w-96 shadow-xl">
<div className="card-body">
<div className="card-actions justify-center">
  <Link to={`/addWidget/${category}`} ><button  className="btn border border-black">+Add widget</button></Link>
</div>
</div>
</div>
    </div>
    );
};

export default Dashboard4;
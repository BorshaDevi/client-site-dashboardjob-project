import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Dashboard1 from '../../Dashboard1/Dashboard1';
import Dashboard2 from '../../Dashboard2/Dashboard2';
import Dashboard3 from '../../Dashboard3/Dashboard3';
import Dashboard4 from '../../Dashboard4/Dashboard4';

const Dashboard = () => {
    const {data : category,refetch}= useQuery({
      queryKey:['category'],
      queryFn:async()=>{
        const data=await axios.get('https://dashboard-job-project.vercel.app/dashboradCategory')
        console.log(category)
        return data.data
      }
    })
    const CSPM=category?.find(cat=> cat.category==='CSPM Executive dashboard')
    const CWPP=category?.find(cat=> cat.category==='CWPP Dashboard')
    const Mobile=category?.find(cat=> cat.category==='Mobile Dashboard')
    const Ticket=category?.find(cat=> cat.category==='Ticket Dashboard')
    return (
        <div>
          <div>
            <p className='text-black font-bold'>CSPM Executive dashboard</p>
            
          {CSPM && <Dashboard1 cspm={CSPM} ></Dashboard1> }
          </div>
          <div>
            <p className='text-black font-bold '>CWPP Dashboard</p>
          {CWPP && <Dashboard2 cwpp={CWPP}></Dashboard2>}
          </div>
          <div>
            <p className='text-black font-bold '>Mobile Dashboard</p>
          {Mobile && <Dashboard3 mobile={Mobile}></Dashboard3>}
          </div>
          <div>
            <p className='text-black font-bold '>Ticket Dashboard</p>
          {Ticket && <Dashboard4 ticket={Ticket}></Dashboard4>}
          </div>
        </div>
    );
};

export default Dashboard;
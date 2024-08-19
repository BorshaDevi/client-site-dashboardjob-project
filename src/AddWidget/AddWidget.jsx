import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import DashboardForm from '../Dashboard1/DashboardForm';
import 'react-tabs/style/react-tabs.css';
import DashboardForm2 from '../Dashboard2/DashboardForm2';
import DashboardForm3 from '../Dashboard3/DashboardForm3';
import DashboardForm4 from '../Dashboard4/DashboardForm4';
import { RxCross2 } from 'react-icons/rx';

const AddWidget = () => {
    const categories=['CSPM Executive dashboard','CWPP Dashboard','Mobile Dashboard','Ticket Dashboard']
    const {category}=useParams()
    const index=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(index)
    
    return (
        <div className=' bg-base-100 w-screen h-screen shadow-xl ml-12'>
          <div className='flex p-2 justify-between bg-blue-800 text-white'>
            <h1>Add Widget</h1>
            <Link to={'/'}><RxCross2 className=''></RxCross2></Link>
          </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>CSPM Executive dashboard</Tab>
        <Tab>CWPP Dashboard</Tab>
        <Tab>Mobile Dashboard</Tab>
        <Tab>Ticket Dashboard</Tab>
      </TabList>
      <TabPanel><DashboardForm category={category}></DashboardForm></TabPanel>
      <TabPanel><DashboardForm2 category={category}></DashboardForm2></TabPanel>
      <TabPanel><DashboardForm3 category={category}></DashboardForm3></TabPanel>
      <TabPanel><DashboardForm4 category={category}></DashboardForm4></TabPanel>
    </Tabs> 
      
      

           
        </div>
    );
};

export default AddWidget;
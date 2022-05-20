import React from 'react'
import './App.css'
import { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from 'syncfunsion/ej2-react-popups';
import {NavBar,Footer,SideBar,ThemeSettings} from './components';
import {Ecommerce,Orders,Calendar,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor} from './pages';




const App = () => {
const activeMenu = true;
  return (
   <div>
       <BrowserRouter>
       <div className="flex relative dark:bg-main-dark-bg">
           <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
               <TooltipComponent content="Setting" position="Top">
                   <button type="button"
                   className = "text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
                   style={{background:'blue',borderRadius:'50%'}}>
                       <FiSettings/>
                   </button>
               </TooltipComponent>
           </div>

           {activeMenu ? (
               <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                   <SideBar/>
               </div>
           ) : ( 
           <div className='w-0 dark:bg-secondary-dark-bg'>
               <SideBar/>
           </div>
           )}
           <div className = {
               `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`
           }>
               <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                   <NavBar/>
               </div>
           </div>
           <div>
               <Routes>
                   {/* Ecommerce */}

                   <Route path="/" element="ECommerce"/>
                   <Route path="/ecommerce" element="ECommerce"/>

                    {/* pages */}
                   <Route path="/orders" element="Orders"/>
                   <Route path="/employees" element="Employees"/>
                   <Route path="/customers" element="Customers"/>

                    {/* Apps */}
                    <Route path="/kanban" element="Kanban"/>
                    <Route path="/editor" element="Editor"/>
                    <Route path="/Calendar" element="Calendar"/>
                    <Route path="/color-picker" element="ColorPicker"/>

                     {/* Charts */}
                     <Route path="/Line" element="Line"/>
                     <Route path="/area" element="Area"/>
                     <Route path="/bar" element="Bar"/>
                     <Route path="/pie" element="Pie"/>
                     <Route path="/financial" element="Financial"/>
                     <Route path="/color-mapping" element="ColorMap"/>
                     <Route path="/pyramid" element="Pyramid"/>
                     <Route path="/stacked" element="Stacked"/>


               </Routes>
           </div>
       </div>
       </BrowserRouter>
   </div>
  )
}

export default App
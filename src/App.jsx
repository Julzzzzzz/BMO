import React from 'react'
import { createBrowserRouter, BrowserRouter as Router, Routes, Route, RouterProvider, createRoutesFromElements, Outlet } from 'react-router-dom';
import './App.css'
import Login from './admin-page/Login'
import AdminNavbar from './admin-components/AdminNavbar';
import AdminDashboard from './admin-page/AdminDashboard';
import AddUser from './admin-components/AddUser';
import UserList from './admin-components/UserList';
import Reports from './admin-components/Reports';
import Settings from './admin-components/Settings';
import AdminOverview from './admin-components/AdminOverview';
import NewUser from './admin-components/NewUser';

// function App() {


  // return (
  // <>
  //    <Router>
  //       <AdminNavbar />
  //     <Routes>
  //       <Route path='login' element={<Login />} />
  //       <Route path='dashboard' element={<AdminDashboard />} />
  //       <Route path='add-user' element={<AddUser />} />
  //       <Route path='user-list' element={<UserList />} />
  //       <Route path='reports' element={<Reports />} />
  //       <Route path='settings' element={<Settings />} />
  //       <Route path='logout' element={<Logout />} />
  //     </Routes>
  //   </Router>

  //   </>
  // )

//   return(
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/*"
//           element={
//             <>
//               <AdminNavbar />
//               <AdminOverview />
//               <Routes>
//                 <Route path="dashboard" element={<AdminDashboard />} />
//                 <Route path="add-user" element={<AddUser />}>
//                   <Route path="new-user" element={<NewUser />} /> 
//                 </Route>
//                 <Route path="user-list" element={<UserList />} />
//                 <Route path="reports" element={<Reports />} />
//                 <Route path="settings" element={<Settings />} />
//               </Routes>
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   )
  
// }

// export default App


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='login' element={<Login />} />
    <Route path='/' element={<AdminNavbar />}>
      <Route path='dashboard' index element = {<AdminDashboard />} />
      <Route path='user-list' index element = {<UserList />} />
      <Route path='reports'index element = {<Reports />} />
      <Route path='settings'index element = {<Settings />} />
      <Route path='new-user'index element = {<NewUser />} />
      <Route path='add-user'index element = {<AddUser />} />
    </Route>
 </>
))



function App() {
  return (
    <>
   
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
   
      <Outlet />
  
    </>
  );
}

export default App;


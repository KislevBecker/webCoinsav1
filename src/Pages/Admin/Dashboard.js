import React from 'react';
import AdminMenu from '../../Components/AdminMenu';
import SideBar from '../../Components/Sidebar';

const Dashboard = () => {
  return (
    <>
      {/* <div className="bg-admin"> */}
        <div className="row">
          <div className="col-md-4 col-lg-4">
          {/* <AdminMenu /> */}
          <SideBar />
          </div>

          <div className="col-md-8 col-lg-8">
          {/* <div className="container"> */}
          <div className="row bg-admin-2">
            {/* <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xs-3"> */}
              <div className="card">
                <div className="card-body">
                  hola
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
          </div> 
        </div>

      {/* </div> */}
    </>
  )
}
export default Dashboard
import React from "react";
import "./Dashboard.css";
import { adminUsers, userTableColumns } from "../../constant";
import Tabs from "../common/Tabs/Tabs";
import TabPane from "../common/Tabs/TabPane";
import Table from "../common/Table";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <h3>Admin</h3>
      <Tabs selected={0}>
        <TabPane label="Users">
          <div className="status-data-tabs">
            <ul>
              <li className="selected">
                <i>
                  <img src="./images/defination_icon.svg" />
                </i>
                Definations -58
              </li>
              <li>
                <i>
                  <img src="./images/tickcircle_icon.svg" />
                </i>
                Pending
              </li>
            </ul>
          </div>
          <Table rows={adminUsers} columns={userTableColumns} />
        </TabPane>
        <TabPane label="User Groups">
          <div>This is my tab 2 contents!</div>
        </TabPane>
      </Tabs>
      <Footer />
    </div>
  );
}

export default Dashboard;

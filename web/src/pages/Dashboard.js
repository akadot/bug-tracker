import React from "react";
import { Outlet } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer.js';
import Sidebar from "../components/Sidebar.js";

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Sidebar />
			<Outlet />
		</DashboardContainer>
	);
}

export default Dashboard;
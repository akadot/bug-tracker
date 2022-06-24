import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Default from './pages/Default.js';
import Users from './pages/UsersList.js';
import Tickets from './pages/TicketsList';
import Roles from './pages/Roles';
import Categories from './pages/Categories';
import Status from './pages/Status';
import Projects from './pages/Projects';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Navigate to='/login' replace />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route path='/dashboard' element={<Default />} />
					<Route path='/dashboard/tickets' element={<Tickets />} />
					<Route path='/dashboard/users_list' element={<Users />} />
					<Route path='/dashboard/roles' element={<Roles />} />
					<Route path='/dashboard/categories' element={<Categories />} />
					<Route path='/dashboard/status' element={<Status />} />
					<Route path='/dashboard/projects' element={<Projects />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Navigate to='/login' replace />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Navigate to='/login' replace />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Favorite, User } from './page'
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/favorite'
					element={<Favorite />}
				/>
				<Route
					path='/user/:id'
					element={<User />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)

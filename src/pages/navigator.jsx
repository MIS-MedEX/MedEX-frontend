import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import { Personal_Page } from './personal-page/personal-page';
import { Home_Page } from './home-page/home-page';


export const Navigator = () => (
	<Router>
		<Routes>
            <Route path="/personal" element={<Personal_Page />} />
            <Route path="/home" element={<Home_Page />} />
		</Routes>
	</Router>
);

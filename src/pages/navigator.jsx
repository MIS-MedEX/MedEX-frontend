import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route, 
y
} from 'react-router-dom';
import { Personal_Page } from './personal-page/personal-page';
// import { Home_Page } from './home-page/home-page';
import { Home_Page } from './PatientsList/index';


export const Navigator = () => (
	<Router>
		<Routes>
            <Route path="/" element={<Home_Page />} />
            <Route path="/personal" element={<Personal_Page />} />
		</Routes>
	</Router>
);

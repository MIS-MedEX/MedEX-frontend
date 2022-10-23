import React from 'react';




class HomePage extends React.Component {

	constructor(props){
		super(props);
	}

    updateController(){
    }
    componentDidMount() {
        this.updateController()
    }

	render() {
		return (
			<React.Fragment>
                
				<div style={{backgroundColor: "#777777", width: "100vw", height: "100vh"}}>
                    <h1>Hello</h1>
                </div>
			</React.Fragment>
		);
	}

}



export const Home_Page = (HomePage)
import React from "react";

//create your first component
const Home = () => {
	return (
		<body>
			<div className="text-center">
				<div className="holder"></div>
				<div className="trafficLights">
					<div className="light red"></div>
					<div className="light yellow"></div>
					<div className="light green"></div>
				</div>
			</div>
		</body>
	);
};

export default Home;

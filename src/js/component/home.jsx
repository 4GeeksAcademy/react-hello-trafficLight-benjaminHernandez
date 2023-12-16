import React, { useState } from "react";

//create your first component
const Home = () => {
	const [SelectedLight, setSelectedLight] = useState("red")
	return (
		<body>
			<div className="text-center">
				<div className="holder"></div>
				<div className="trafficLights">
					<div onClick = {() => setSelectedLight("red")}
					className={"light red" + ((SelectedLight === "red") ? " brilla" : "")}></div>
					<div onClick = {() => setSelectedLight ("yellow")} 
					className={"light yellow" + ((SelectedLight === "yellow") ? " brilla" : "")}></div>
					<div onClick = {() => setSelectedLight("green")} 
					className={"light green" + ((SelectedLight === "green") ? " brilla" : "")}></div>
				</div>
			</div>
		</body>
	);
};

export default Home;

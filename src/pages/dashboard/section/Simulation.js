import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Select from 'react-select';
import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

export default function Simulation() {

	const [selected, setSelected] = React.useState("");

	const changeSelectOptionHandler = (event) => {
		setSelected(event.target.value);
	};

	const [model, setModel] = useState('');
	const [testCondition, setTestCondition] = useState('');
	const [result, setResult] = useState('');
	const [interval, setInterval] = useState('');
	const [tolerance, setTolerance] = useState('');
	const [startTime, setStartTime] = useState('');
	const [stopTime, setStopTime] = useState('');
	const [error, setError] = useState("");
	const navigate = useNavigate();


	const modeListOptions = [
    { value: 'Select', label: 'Select' },
    { value: 'Ride & Handline', label: 'Ride & Handline' },
    { value: 'Driving & Braking', label: 'Driving & Braking' },
	{ value: 'Efficiency', label: 'Efficiency' }
  ];

	const rideHandlineOptions = [
	"Step Steer",
	"Double Lane Change",
	"Bump Test"
  ];

	const drivingBrakingOptions = [
    "Acceleration",
    "Deceleration",
	"Tip in Out"
  ];

	const efficiencyOptions = [
    "New European Driving Cycle",
    "Cold Federal Test Procedure Single",
	"Cold Federal Test Procedure Continuous",
	"Highway US06(Supplemental FTP)",
	"Urban Dynamometer Driving Schedule",
	"Highway Fuel Economy Driving Schedule",
	"Constant Speed Cycle"
  ];

	const algorithamOptions = [
    { value: 'Cvode', label: 'Cvode' },
    { value: 'LSODAR', label: 'LSODAR' },
	{ value: 'DASSL', label: 'DASSL' },
	{ value: 'Radau lla', label: 'Radau lla' },
	{ value: 'Euler', label: 'Euler' },
	{ value: 'Runge-Kutta', label: 'Runge-Kutta' }
  ];

	let type = null;
	let options = null;

	if (selected === "Ride & Handling") {
		type = rideHandlineOptions;
	} else if (selected === "Driving & Braking") {
		type = drivingBrakingOptions;
	} else if (selected === "Efficiency") {
		type = efficiencyOptions;
	}

	if (type) {
		options = type.map((el) => <option key={el}>{el}</option>);
	}

	const handleResultSubmit = (e) => {
		e.preventDefault();
		// const Results = JSON.parse(localStorage.getItem('Results'));
		const Results = JSON.parse(localStorage.getItem('Results') || "[]");
	  const Result = { model:model, result:result, interval:interval, tolerance:tolerance, startTime:startTime, stopTime:stopTime };  
    Results.unshift(Result);
    localStorage.setItem('Results',JSON.stringify(Results));
		if (model === "" || result === ""  || interval === "" || tolerance === "" || startTime === "" || stopTime === "") {
      setError("Fields are required");
      return;
    } else {
      navigate("/result");
    }
	}

	const doNothing = (e) => {
		e.preventDefault();
		console.log('Clicked pply')
	}

  return (
    <div className='simulation-container'>
			<h2 className='simulation-heading'>Setup</h2>
			{error && <p className="error" >
          Fields are required
          </p>
        }
			<form>
				<div className='experiment-content'>
					<h3 className='setup-heading'>Experiment</h3>
					<form>
						<label className='setup__label'>
							Model
						</label>
						<input type="text" className="setup__input" onChange={(e) => setModel(e.target.value)} required />   
						<label className='setup__label'>
							Test Condition
						</label>
						<div className="setup__input select-dropdown">
							{/* <Select type="text" className="select-item" 
							options={modeListOptions} />  
							<Select type="text" className="select-item select-item_two" 
							options={rideHandlineOptions} />   */}
							<select onChange={changeSelectOptionHandler}>
								<option>Select Mode...</option>
								<option>Ride & Handling</option>
								<option>Driving & Braking</option>
								<option>Efficiency</option>
							</select>
							<select>
								{
								/** This is where we have used our options variable */
								options
								}
							</select>
						</div> 
						<label className='setup__label'>
							Result File Name
						</label>
						<input type="text" className="setup__input" onChange={(e) => setResult(e.target.value)} required />  
						<div className="align-right">
							<button className='apply-btn' onClick={doNothing}>Apply</button>
						</div>
					</form>
				</div>
				<div className='experiment-content output-content'>
					<h3 className='setup-heading'>Output Interval</h3>
					<form>
						<label className='setup__label'>
							Interval Length
						</label>
						<input type="text" className="setup__input" onChange={(e) => setInterval(e.target.value)} required /> 
						<div className="align-right">
							<button className='apply-btn' onClick={doNothing}>Apply</button>
						</div>
					</form>
				</div>
				<div className='experiment-content output-content'>
					<h3 className='setup-heading'>Integration</h3>
					<form>
						<label className='setup__label'>
							Algorithm
						</label>
						<Select type="text" className="setup__input" 
                options={algorithamOptions} /> 
						<label className='setup__label'>
							Tolerance
						</label>
						<input type="text" className="setup__input" onChange={(e) => setTolerance(e.target.value)} required /> 
						<div className="align-right">
							<button className='apply-btn' onClick={doNothing}>Apply</button>
						</div>
					</form>
				</div>
				<div className='experiment-content output-content'>
					<h3 className='setup-heading'>Simulation</h3>
					<form>
						<label className='setup__label'>
							Start Time
						</label>
						<input type="text" className="setup__input" onChange={(e) => setStartTime(e.target.value)} required /> 
						<label className='setup__label'>
							Stop Time
						</label>
						<input type="text" className="setup__input" onChange={(e) => setStopTime(e.target.value)} required /> 
						<div className="align-right">
							<button className='apply-btn' onClick={doNothing}>Apply</button>
						</div>
					</form>
				</div>
				<div className="align-right">
					<button className='submit-btn' onClick={handleResultSubmit} style={{'backgroundColor':'limegreen' }}>Run</button>
				</div>
			</form>
    </div>
  )
}

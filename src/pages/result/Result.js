import React, { useState, useEffect, Component } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import {Table} from 'react-bootstrap';
import CsvData from '../../components/ColdFTP_Single_Result2.csv';
import Papa from 'papaparse';
import {Bar} from 'react-chartjs-2';
import {
	Chart as ChartJS, 
	CategoryScale, 
	LinearScale, 
	BarElement, 
	Title, 
	Tooltip, 
	Legend} from 'chart.js';
import '../result/Result.css';
import useExternalScripts from '../../hooks/useExternalScripts';
import Velocity from './Velocity';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

ChartJS.register(
	CategoryScale, 
	LinearScale, 
	BarElement, 
	Title, 
	Tooltip, 
	Legend
)

export default function Result() {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const handleVelocityCheckBox = (event) => {
		if(event.target.checked) {
			navigate("/VelocityGraph")
		}
	}

	const handleAccelerationCheckBox = (event) => {
		if(event.target.checked) {
			navigate("/AccelerationGraph")
		}
	}

	const handleBusCheckBox = (event) => {
		if(event.target.checked) {
			navigate("/BatteryBusGraph")
		}
	}

	useEffect(() => {  
		setLoading(true);
		setTimeout(() => {
		  setLoading(false);
		}, 1000);
	},[])

  	return (
		<div>
				{
					loading ?
					<BeatLoader color={'#0d6efd'} loading={loading} className="loader" size={50} />
					:
					<> 
					<div  >
						<div  class="row col-7 d-flex justify-content-center text-white" >
							<div className=''>
								<Table>
									<thead>
										<tr>
											<th>Variable</th>
											<th>Value</th>
											<th>Unit</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><input type="checkbox" name="Velocity" onChange={handleVelocityCheckBox} />&nbsp; longitudinalVelocity</td>
											<td> </td>
											<td>m/s</td>
											<td>Vehicle Longitudinal Velocity</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="Acceleration" onChange={handleAccelerationCheckBox} />&nbsp; longitudinalAcceleration</td>
											<td> </td>
											<td>m/s^2</td>
											<td>Vehicle Longitudinal Acceleration</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="Bus" onChange={handleBusCheckBox} />&nbsp; SOC</td>
											<td> </td>
											<td>-</td>
											<td>State of Charge</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="Bus" />&nbsp; useThermalPort</td>
											<td> </td>
											<td></td>
											<td>Enable/Disable</td>
										</tr>

										<tr>
											<td>► frictionParameters</td>
										</tr>

										<tr>
											<td><input type="checkbox" name="" />&nbsp; phiMechanical</td>
											<td><input type="inputbox" name="" /></td>
											<td>deg</td>
											<td>Mechanical an..</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="" />&nbsp; der(phiMechanical)</td>
											<td> </td>
											<td>rad/s</td>
											<td>der(Mechanical an..)</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="" />&nbsp; wMechanical</td>
											<td><input type="inputbox" name="" /></td>
											<td>rev/min</td>
											<td>Mechanical an..</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="" />&nbsp; tauElectrical</td>
											<td> </td>
											<td>N.m</td>
											<td>Electromagnetic</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="" />&nbsp; tauShaft</td>
											<td> </td>
											<td>N.m</td>
											<td>Shaft torque</td>
										</tr>

										<tr>
											<td>▼ flange</td>
										</tr>

										<tr>
											<td>&nbsp; &nbsp;<input type="checkbox" name="" />&nbsp; phi</td>
											<td></td>
											<td>deg</td>
											<td>Absolute rotation..</td>
										</tr>
										<tr>
											<td>&nbsp; &nbsp;<input type="checkbox" name="" />&nbsp; tau</td>
											<td> </td>
											<td>N.m</td>
											<td>Cut torgue in t..</td>
										</tr>

										<tr>
											<td>► inertiaRator</td>
										</tr>
										<tr>
											<td>► inertiaStator</td>
										</tr>
										<tr>
											<td>► fixed</td>
										</tr>
										<tr>
											<td>► friction</td>
										</tr>
										<tr>
											<td>► statorCoreParameters</td>
										</tr>
										<tr>
											<td>► staryLoadParameters</td>
										</tr>
										<tr>
											<td>► powerBalance</td>
										</tr>

										<tr>
											<td>📁 vs</td>
											<td></td>
											<td></td>
											<td>Stator instant...</td>
										</tr>
										<tr>
											<td>📁 is</td>
											<td></td>
											<td></td>
											<td>Stator instant...</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="" /> &nbsp; i_O_s</td>
											<td></td>
											<td>A</td>
											<td>Stator zero seq...</td>
										</tr>
										<tr>
											<td><input type="checkbox" name="" /> &nbsp; der(i_O_s)</td>
											<td></td>
											<td>A/s</td>
											<td>der(Stator zero seq...</td>
										</tr>
										<tr>
											<td>📁 idq_ss</td>
											<td></td>
											<td></td>
											<td>Stator space ph...</td>
										</tr>
										<tr>
											<td>📁 idq_sr</td>
											<td></td>
											<td></td>
											<td>Stator space ph...</td>
										</tr>
										<tr>
											<td>📁 der(idq_sr)</td>
											<td></td>
											<td></td>
											<td>der(Stator spac...</td>
										</tr>
										<tr>
											<td>📁 idq_rs</td>
											<td></td>
											<td></td>
											<td>Rotor space ph...</td>
										</tr>
										<tr>
											<td>📁 idq_rr</td>
											<td></td>
											<td></td>
											<td>Rotor space ph...</td>
										</tr>
										<tr>
											<td>📁 der(idq_rr)</td>
											<td></td>
											<td></td>
											<td>der(Rotor spac...</td>
										</tr>
									</tbody> 
								</Table>
							</div>
						</div>
					</div>
					</>
				}
		</div>
  	)
}

import React, { useState, useEffect } from 'react';
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

ChartJS.register(
	CategoryScale, 
	LinearScale, 
	BarElement, 
	Title, 
	Tooltip, 
	Legend
)

export default function Bus() {

	const [chartData, setChartData] = useState({
		datasets: []
	});
	const [chartOptions, setChartOptions] = useState({})

	useEffect(() => {
		Papa.parse(CsvData, {
			download: true,
			header: true,
			dynamicTyping: true,
			delimiter: "",
			complete: ((res) => {
				setChartData({
					labels: res.data.map((item, index) => [item['Time']]).filter( String ),
					datasets: [
						{
							label: "controlBus.batteryBus_1.SOC",
							data: res.data.map((item, index) => [item['Bus']]).filter( String ),
							borderColor: "black",
							backgroundColor: "red"
						}
					]
				});
				setChartOptions({
					responsive: true,
					plugins: {
						legend: {
							position: 'top'
						},
						title: {
							display: true,
							text: "Time"
						}
					}
				})
			})
		})
	}, [])

  return (
    <div class="row col-10 d-flex justify-content-center text-white" >
		{
			chartData.datasets.length > 0 ? (
				<div>
					<Bar options={chartOptions} data={chartData} />
				</div>
			) : (
				<div>
					Loading...
				</div>
			)
		}
	</div>
  )
}

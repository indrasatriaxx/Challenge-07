import {Bar} from 'react-chartjs-2';
import {Container} from 'react-bootstrap';
import {Chart} from 'chart.js/auto';
import '../css/CarChart.css'

const CarChart = () => {

    const carDatas = {
        labels: ["Toyota", "Honda", "Mitsubishi", "Isuzu", "Daihatsu"],
        datasets: [
            {
                label: "Disewakan",
                backgroundColor: "#0D28A6",
                data: [54, 27, 31, 47, 29]
            },
            {
                label: "Available",
                backgroundColor: "#CFD4ED",
                data: [21, 40, 59, 8, 17]
            }
        ]
    }
    
    return(
        <>
        <Container>
            <div className="chart-wrapper">
                <div className="why-us">
                    <h1>Berikut adalah Chart dari Binar Car Rental</h1>
                </div>
                <Bar data={carDatas}/>
            </div>
        </Container>
        
        </>
    )
}
export default CarChart;
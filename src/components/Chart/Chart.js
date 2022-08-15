import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar key={dataPoint.label} label={dataPoint.label} maxValue={totalMaximum} value={dataPoint.value}/>
                )
            )}

        </div>
    )

}

export default Chart;
import Chart from "./components/custom/Chart"
import LineChartHighCharts from "./components/highcharts/LineChart"
import LineGraph from "./components/recharts/LineChart"

const App = () => {
  
  // what is the format of data? and how does that change depending the chart type
  const data = [
    {x: 0, y: 0},
    {x: 10, y: 10},
    {x: 20, y: 40},
    {x: 30, y: 30},
    {x: 40, y: 50},
    {x: 50, y: 40},
    {x: 60, y: 30},
    {x: 70, y: 80},
    {x: 80, y: 90},
    {x: 90, y: 20},
    {x: 100, y: 5},
  ]

  // props for line component 
  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-w-[500px] tw-h-[300px] tw-mx-auto">
        <Chart height={300} width={500} data={data}/>
      </div>
      <div className="tw-w-[500px] tw-h-[300px] tw-mx-auto">
        <LineGraph height={300} width={500} data={data}/>
      </div>
      <div className="tw-w-[500px] tw-h-[300px] tw-mx-auto">
        <LineChartHighCharts height={300} width={500} data={data}/>
      </div>
    </div>
  )
}

export default App

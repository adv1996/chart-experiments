import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface Data {
  x: number;
  y: number;
}

interface LineChartProps {
  height: number;
  width: number;
  data: Data[];
}

const options = (data: Data[]) => {
  return {
    title: {
      text: "My stock chart",
    },
    series: [
      {
        data,
      },
    ],
  };
};

const LineChartHighCharts = (props: LineChartProps) => {
  const { data } = props;
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options(data)}
    />
  );
};

export default LineChartHighCharts;

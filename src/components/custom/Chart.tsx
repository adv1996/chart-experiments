import { scaleLinear, axisBottom, axisLeft, select, line, curveLinear } from 'd3'

import { useEffect, useMemo, useRef } from "react";

interface Data {
  x: number
  y: number
}

interface ChartProps {
  height: number
  width: number
  data: Data[]
  children?: JSX.Element | JSX.Element[]
}

const Chart = (props: ChartProps) => {
  const { height, width, data, children } = props;

  const margin = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 25,
  };

  const plotWidth = useMemo(() => {
    return width - margin.left - margin.right
  }, [width, margin])

  const plotHeight = useMemo(() => {
    return height - margin.top - margin.bottom
  }, [height, margin])

  const xAxisRef = useRef<SVGSVGElement>(null)
  const yAxisRef = useRef<SVGSVGElement>(null)

  const xScale = scaleLinear().domain([0, 100]).range([0, plotWidth])
  const yScale = scaleLinear().domain([100, 0]).range([0, plotHeight])

  const lineGenerator = line<Data>()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .curve(curveLinear)

  useEffect(() => {
    if (xAxisRef.current) {
      const xAxis = axisBottom(xScale)
      select(xAxisRef.current).call(xAxis);
    }

    if (yAxisRef.current) {
      const yAxis = axisLeft(yScale)
      select(yAxisRef.current).call(yAxis);
    }
  }, [])

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map(point => {
          return (
            <circle cx={xScale(point.x)} cy={yScale(point.y)} r="5"/>
          )
        })}
        <path d={lineGenerator(data) || ""} fill="none" stroke="black"/>
        { children }
      </g>
      <g ref={xAxisRef} transform={`translate(${margin.left}, ${plotHeight + margin.bottom})`}/>
      <g ref={yAxisRef} transform={`translate(${margin.left}, ${margin.top})`}/>
    </svg>
  );
};

export default Chart;

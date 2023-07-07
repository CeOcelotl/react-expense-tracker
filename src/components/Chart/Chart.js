import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {//此 props 來自 ExpensesChart.js 的 chartDataPoints
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);//將物件轉換成值
    const totalMaximun = Math.max(...dataPointValues);//找出 dataPointValues 陣列中的最大值，透過展開式會得到12個參數

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => 
         <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMaximun} 
            label={dataPoint.label}
        />)}
    </div>
}
export default Chart; 
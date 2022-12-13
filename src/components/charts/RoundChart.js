import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
  ArcElement, Tooltip, Legend
);



const RoundChart = () => {

  const data = {

    labels: ['France 4260 Sales', 'Italy 3970 Sales', 'Japan 4260 Sales', 'Canada 3970 Sales'],

    datasets: [
      {
        // label: '# of Votes',
        label: 'Sales Distribution',
        data: [4260, 3970, 4260, 3970],
        backgroundColor: [
          '#80E2FF',
          '#F49FA8',
          '#FFDF94',
          '#B5B3FB',

        ],
        borderColor: [
          '#80E2FF',
          '#F49FA8',
          '#FFDF94',
          '#B5B3FB',

        ],
        borderWidth: 1,
        hoverOffset: 4,
        cutout: '60%',

      },
    ],
  };

  const options = {
    plugins: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: 'bottom',
        rtl: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        }
      }
    },
  }

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, arg, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 15px sans-serif";
      ctx.fillStyle = "#4D4F5C";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText('230,900 Sales', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);

    }
  }








  return (
    <div>
      <div className="" style={{ width: '100%', height: '100%' }}>
        <div className="Statistics space-between mb-3 ">
          <h6 className='Statistics-title'>Sales Distribution</h6>


        </div>
        <Doughnut data={data} plugins={[textCenter]} options={options}></Doughnut>
      </div>

    </div>
  )
}

export default RoundChart
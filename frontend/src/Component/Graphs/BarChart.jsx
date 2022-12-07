import { Bar } from "react-chartjs-2";
// import Skeleton from 'react-loading-skeleton';
import "./BarGraph.css";

const options = {
  maintainAspectRatio: false,
  // plugins: {
  //   legend: {
  //     position: "bottom",
  //   },
  // },
  scales: {
    y: {
      drawBorder: false,
      display: false,
      ticks: {
        beginAtZero: true,
      },
    },

    x: {
      drawBorder: false,
      display: false,
    },
  },
};

const BarChart = (props) => {
  const label = ["1","2"];
  const earning = ["100","200"];
  // for(let i in props.data){
  //   label.push(props.data[i].created_at__date);
  //   earning.push(props.data[i].sum);
  // }

  let graphData;
  // if (props.data) {
    graphData = {
      labels: label,
      datasets: [
        {
          label: "#Daily earnings",
          // data: [8, 6, 10, 4, 6, 2, 7],
          data: earning,
          backgroundColor: [
            // "rgba(255, 99, 132, 0.2)",
            // "rgba(54, 162, 235, 0.2)",
            
            // "rgba(255, 206, 86, 0.2)",
            // "rgba(70, 42, 255, 1)",
            // "rgba(9, 220, 168, 1)",
            // "#D4F8CE",

            // "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderWidth: 1,
        },
      ],
    };
  // }

  // if(!props.data){
  //   return <Skeleton width={595} height={400} style={{borderRadius:'12px',marginTop:'24px'}}/>
  // }

  return (
    <div className="barGraph">
      <h6 className="heading">EARNINGS</h6>
      <Bar
        data={graphData}
        height={500}
        width={500}
        // maintainAspectRatio
        // options={{
        //   scales: {
        //     yAxes: [
        //       {
        //         ticks: {
        //           beginAtZero: true,
        //         },
        //       },
        //     ],
        //   },
        // }}
      />
    </div>
  );
};

export default BarChart;
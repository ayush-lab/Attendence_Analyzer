
// const LineGraphData = [
//   {
//     name: 'Page A',
//     actual: 4000,
//     minThreshhold: 3000,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     actual: 3000,
//     minThreshhold: 3000,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     actual: 2000,
//     minThreshhold: 3000,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     actual: 2780,
//     minThreshhold: 3000,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     actual: 1890,
//     minThreshhold: 3000,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     actual: 2390,
//     minThreshhold: 3000,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     actual: 3490,
//     minThreshhold: 3000,
//     amt: 2100,
//   },
// ];

const getLastSecond = (i) => {
  const now = new Date();
  const time = new Date(now.getTime() - i * 1000);
  const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  return formattedTime;
};



function LineGraphData(numOfObj) {
  const liveGraphData = []
    for (var i = 0; i < numOfObj; i++) {
      liveGraphData.push({
        name: getLastSecond(i),
        actual: parseInt(Math.random() * 5) + 73,
        minThreshhold: 75,
        amt: 2181,
      })
  }
  return liveGraphData
}

export default LineGraphData
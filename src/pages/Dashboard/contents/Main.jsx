import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ReactApexChart from 'react-apexcharts';
import PacketTable from '../../../components/PacketTables';
import {  packets } from "../../../data"
// import { useOktaAuth } from '@okta/okta-react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/User/UserSlice';
import { getAll, getStagesCounts } from '../../../ApiHandler';

const Main = () => {
  const userInfoSS = useSelector(selectUser);
  const [stagesData, setStagesData] = useState([]);
  const [time, setTime] = React.useState(new Date());
  const [chartData, setChartData] = useState({options: {}, series: []});

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    getAll().then(response => {
      setStagesData(response.data);
    }).catch(error => {
      console.error('Error in getAll useEffect main component',error);
    })
  }, []);

  //Bar Chart
  useEffect(() => {
      getStagesCounts().
      then(data => {
        const categories = data.map(item => (item.sourceTopicName==='DLT_WORKFLOW')?item.sourceTopicName:item.sourceTopicName.split('.')[2]);
        const counts = data.map(item => item.count);

        setChartData({
          series: [{
            name: 'Total Packets',
            data: counts
          }],
          options: {
            chart: {
              type: 'bar',
              height: 400
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded',
                startingShape: 'rounded',
                borderRadius: 6,
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: categories,
              labels: {
                style: {
                  colors: '#020B50',
                  fontSize: '10px',
                  fontWeight: 500,
                }
              }
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return " " + val + " packets"
                }
              }
            }
          },
        });
      }).catch(error => {
        console.error('Error in getStagesCount component: ',error);
      });
    },[]);

  //Donut Chart & Priority
  let counter = 0;
  let delCounter = 0;
  let total = 0;
  let highPriorityCount = 0;
  let lowPriorityCount = 0;
  stagesData.forEach(obj => {
    if(obj.resubmissionTrigered===0){
      counter++;
    }
    if(obj.markForDelete===1){
      delCounter++;
    }
    if(obj.priority<5){
      lowPriorityCount++;
    }else{
      highPriorityCount++;
    }
    total++;
  })
  let resubmittedPacketsCount = total - counter; 
  let rejectedPacketsCount = total - delCounter;
  const rejectPercentage = Number(((rejectedPacketsCount/total)*100).toFixed(0));
  const resubmitPercentage = 100 - rejectPercentage;

  const [donutChart, setDonutChart] = useState(
    {

      series: [],
      options: {
        chart: {
          type: 'donut',
        },
        labels: [],
        dataLabels: {
          enabled: false,
        },
        colors: ['#020B50', '#1BB1DC'],
        legend: {
          show: false,
        },
      },
    }
  )

  useEffect(() => {
    
    const actionCategories = ['Resubmitted Packets', 'Rejected Packets'];
    const actionCounts = [resubmittedPacketsCount, rejectedPacketsCount];

    setDonutChart({
      ...donutChart,
      options:{
        ...donutChart.options,
        labels: actionCategories,
      },
      series:actionCounts,
    });
  },[stagesData]);


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);
  const timeRef = React.useRef(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <div className='h-full w-full '>
      {/* {NotificationComponent} */}
      <div className='m-5'>
        <h1 className='text-3xl font-bold leading-loose tracking-wider text-primary-900'>
          Good {
            new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening"
          } ,{userInfoSS.fname} !
        </h1>
        <p className='text-lg  text-secondary-900 mb-5  ' ref={timeRef} >
          {
            time.toLocaleTimeString()
          }
        </p>

      </div>

      <div className='w-full h-fit  mt-5 flex gap-10 items-center justify-between flex-col lg:flex-row '>
        <div className='w-full  lg:w-4/5 h-full p-5 bg-white shadow-xl rounded-xl '>
          <div className='flex items-center justify-between'>
            <h1 className='text-lg  text-primary-900 mb-3'>
              Packets in stages
            </h1>

            <Box >
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Weeks" {...a11yProps(0)} sx={{ fontSize: ".8rem" }} />
                <Tab label="Months" {...a11yProps(1)} sx={{ fontSize: ".8rem" }} />
                <Tab label="Years" {...a11yProps(2)} sx={{ fontSize: ".8rem" }} />
              </Tabs>
            </Box>
          </div>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="100%"
            height="300"
          />
        </div>
        <div className='w-full lg:w-2/5 h-full'>
          <div className='min-h-2/4 px-4 py-8 bg-white shadow-xl rounded-xl flex items-center justify-between  gap-2'>
            <ReactApexChart options={donutChart.options} series={donutChart.series} height="170" width="170" type="donut" />
            <div className='flex flex-col items-start justify-evenly  w-full gap-9'>
              <span className='text-base  font-bold text-primary-900 flex items-center justify-between w-full'>
                <p>
                  Packets Rejected
                </p>
                <b className=' text-secondary-900 text-lg  font-thin'>
                  {rejectPercentage}%
                </b>
              </span>
              <span className='text-base   font-bold text-primary-900 flex items-center justify-between w-full'>
                <p >
                  Packets Resubmitted
                </p>
                <b className=' text-secondary-900 text-lg  font-thin'>
                {resubmitPercentage}%
                </b>
              </span>
            </div>
          </div>
          <div className='min-h-1/4 mt-5 p-4  bg-white shadow-xl rounded-xl flex flex-col items-start justify-between  gap-4'>
            <span className='flex w-4/5 justify-between'>
              <p className='text-base xl:text-lg font-bold text-primary-900'>
                Packets Completed
              </p>
              <p className='text-base xl:text-lg font-bold text-primary-900'>
                No Of Packets
              </p>
            </span>
            <hr className='bg-secondary-900 w-full ' />
            <span className='flex w-full justify-between '>
              <p className='text-primary-900'>
                Higher Priority Packets
              </p>
              <p className='text-primary-900'>
                {highPriorityCount}
              </p>
              <button className='bg-secondary-900 px-2 py-1 text-white rounded-md text-sm'
              >
                View
              </button>
            </span>
            <span className='flex w-full justify-between '>
              <p className='text-secondary-900'>
                Lower Priority Packets
              </p>
              <p className='text-secondary-900'>
                {lowPriorityCount}
              </p>
              {/* Views buttons are in notification testing for time being */}
              <button className='bg-secondary-900 px-2 py-1 text-white rounded-md text-sm'>
                View
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className='w-full p-3  h-fit bg-white  rounded-xl my-10 border shadow-xl '>
        {/* <Packet/> */}
        <PacketTable rows={stagesData} setRows={setStagesData}/>
      </div>
    </div>
  )
}
export default Main;

// onclick : () => handleNotifyClick('Packet updated', 'success' )
import React, { useEffect } from 'react'
import PacketTable from '../../../components/PacketTables';
import StageFilter from '../../../components/Stagefilter';
import Warning from '../../../components/Warning';
import DialogResubmitAll from "../../../components/DialogResubmitAll";
import DialogRejectAll from "../../../components/DialogRejectAll";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/User/UserSlice';
import { deadletter } from '../../../ApiHandler';

const Stage = () => {

  const userInfoSS = useSelector(selectUser);
  const [time, setTime] = React.useState(new Date());
  const [stageName, setStageName] = React.useState([]);
  const [stageData, setStageData] = React.useState([]);
  const [dialogRejectAll, setDialogRejectAll] = React.useState(false);
  const [dialogResubmitAll, setDialogResubmitAll] = React.useState(false);
  const timeRef = React.useRef(null);

  const handleChange = (event) => {
    setStageName(event.target.value);
  };

  useEffect(() => {
    if (stageName.length) {
      deadletter(stageName).then(
        response => {
          setStageData(response.data)
        }
      ).catch(error => {
        console.error('Error in deadletter component:', error);
      })
    }

  }, [stageName])

  const handleResubmitAll = () => {
    setDialogResubmitAll(true);
  }

  const handleRejectAll = () => {
    setDialogRejectAll(true);
  }

  const handleDeleteAllRows = () => {
    setStageData([]);
  }


  return (
    <>

      <DialogRejectAll onDeleteAllRows={() => handleDeleteAllRows()} open={dialogRejectAll} setOpen={setDialogRejectAll} />

      <DialogResubmitAll onDeleteAllRows={() => handleDeleteAllRows()} open={dialogResubmitAll} setOpen={setDialogResubmitAll} />


      <div className='w-full h-full'>

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


        <div className='w-full p-5  h-fit bg-white rounded-xl border shadow-xl '>
          <b className='text-lg text-black font-medium '>Stage Wise Packets</b>
          <div className='w-full'>
            <StageFilter handleChange={handleChange} stageName={stageName} />
            <div className="flex justify-end">
              <button
                type="button"
                className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-600 cursor-pointer hover:bg-green-200 hover:text-green-600 mr-2" onClick={handleResubmitAll}>
                Resubmit All Packets
              </button>

              <button
                type="button"
                className=" border-2 border-red-600 rounded-lg px-3 py-2 text-red-500 cursor-pointer hover:bg-red-200 hover:text-red-600" onClick={handleRejectAll}>
                Reject All Packets
              </button>
            </div>
          </div>
          <br />
          {
            stageData.length === 0 ? <Warning /> : <PacketTable rows={stageData} setRows={setStageData} />
          }
        </div>
      </div>
    </>
  )
}

export default Stage
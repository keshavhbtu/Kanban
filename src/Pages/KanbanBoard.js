import React, { useEffect } from 'react';
import './KanbanBoard.css';
import DisplayBar from '../Components/DisplayBar'
import DashBoard from '../Components/DashBoard'
import { useDispatch} from 'react-redux'
import { fetchData } from '../Service/TaskDataService';

const KanbanBoard = () => {
  const dispatch = useDispatch();   
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return   (
    <div style={{paddingTop : "10px"}} >
      <DisplayBar/>
      <hr style={{marginTop : "10px"}} />
      <DashBoard/>
    </div>
  );
}
 

export default KanbanBoard;

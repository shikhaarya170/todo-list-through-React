import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import  "./style.css";
function Todo() {

    const[input, setInput] = useState('')

    const [data, setData] = useState([])
    
    const [edit,setEdit] = useState(false)

  const [completed,setCompleted] =useState([])

    function handlechange(e) {
        setInput(e.target.value)
    }

    console.log(input);

    function handlesubmit() {
        // setData([...data, input]);
        // setInput('');
        if(edit===false){
            setData([...data, input]);
        }
        else{
       data[edit]=input
        }
        setInput('');
    }
    // console.log(data);

//     function modifyinginputvalue(e){
//    setInput(e.target.value);
// }
    function handleDelete(e,index){
        e.preventDefault()
        setData(data.filter((task,id)=>{
            return id !== index;
        })
        );
    }
  

    function handleEdit(e,index){
        e.preventDefault()
        setInput(data[index])
        setEdit(index)
    }
     

function handleDone(e,index){
    e.preventDefault()
    setCompleted([...completed,index])
}

    
    return (

        <>
            <div>
                <input type='text' placeholder='Enter the value'value={input} onChange={handlechange}>

                </input>

                <button onClick={handlesubmit}>submit</button>
            </div>

            <div>
                {
                    data.map((element,index) => {
                        return (
                            <div>
                                <ul>
                                    <li className={completed.includes(index)?'completed':""}
                                    >
                                            {element}
                                        <a href='' onClick={(e)=>handleDelete(e,index)}>
                                        <DeleteIcon /></a>
                                        <a href='' onClick={(e)=>handleEdit(e,index)}>
                                        < EditIcon/></a>
    
                                        <a href='' onClick={(e)=>handleDone(e,index)}>
                                        < DoneIcon/></a>

                                        
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
            }
    export default Todo
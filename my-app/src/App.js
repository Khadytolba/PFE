import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from "axios";
import Formtable from './components/Formtable';
import Button from 'react-bootstrap/Button'; 


axios.defaults.baseURL = "http://localhost:8080/"

function App() {
  const [addSection,setAddSection] = useState(false)
  const [editSection,setEditSection] = useState(false)
  const [formData,setFormData] = useState({
   reference :"",
   description:"",
   is_retrocede :"",
   amount :"",
   amount_in_ref_currency:"",
   start_date:"",
   end_date:"",
   start_date_refund:"",
   end_date_refund:"",
   interest_rate:"",
   period:"",
   grace_period:"",
  })
  const [formDataEdit,setFormDataEdit] = useState({
    reference :"",
    description:"",
    is_retrocede :"",
    amount :"",
    amount_in_ref_currency:"",
    start_date:"",
    end_date:"",
    start_date_refund:"",
    end_date_refund:"",
    interest_rate:"",
    period:"",
    grace_period:"",
    _id:""
   })
  const[dataList,setDataList] = useState([])

  const handleOnChange = (e)=>{
    const {value,name} = e.target
    setFormData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
        setAddSection(false)
        alert(data.data.message)
        getFetchData()
    }
  }
  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
        setDataList(data.data.data)
    } 
  }
  useEffect(()=>{
    getFetchData()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)
     
     if(data.data.success){
        getFetchData()
        alert(data.data.message)
     }
   
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update",formDataEdit)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
   }


  }

  const handleEditOnChange = async(e)=>{
    const {value,name} = e.target
    setFormDataEdit((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }
  const handleEdit = (el)=>{
    setFormDataEdit(el)
    setEditSection(true)

  } 
  

  
  


  return ( 
    <> 
     <div className="container"> 
       <button className="btn btn-primary" onClick={()=>setAddSection(true)}> Add</button>

     {
       addSection && (
        <Formtable
           handleSubmit={handleSubmit}
           handleOnChange={handleOnChange}
           handleClose={()=>setAddSection(false)}
           rest={formData}
        />

        )
  

      }
      {
        editSection && (
          <Formtable
           handleSubmit={handleUpdate}
           handleOnChange={handleEditOnChange}
           handleClose={()=>setEditSection(false)}
           rest={formDataEdit}
          />
        )
      }

      <div className='tableContainer'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th> Reference </th>
              <th> Description </th>
              <th> Is retrocede </th>
              <th> Amount </th>
              <th> Amount in ref currency </th>
              <th> Start date </th>
              <th> End date </th>
              <th> Start date refund </th>
              <th> End date refund </th>
              <th> Interest rate </th>
              <th> Period </th>
              <th> Grace period </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {dataList.map((el, index) => (
               
                  <tr key={index}>
                    <td>{el.reference}</td>
                    <td>{el.description}</td>
                    <td>{el.is_retrocede}</td>
                    <td>{el.amount}</td>
                    <td>{el.amount_in_ref_currency}</td>
                    <td>{el.start_date}</td>
                    <td>{el.end_date}</td>
                    <td>{el.start_date_refund}</td>
                    <td>{el.end_date_refund}</td>
                    <td>{el.interest_rate}</td>
                    <td>{el.period}</td>
                    <td>{el.grace_period}</td>
                    <td>
                     <button className='btn btn-warning btn-sm' onClick={()=>handleEdit(el)}>Edit</button>
                     <button className='btn btn-danger btn-sm' onClick={()=>handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                
              ))}
              : (<p style={{textAlign : "center"}}>No data</p>
                )
            
          </tbody>
        </table>

      </div> 

  

    </div>
    </> 

    
   );
} 

export default App;

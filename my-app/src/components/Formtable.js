import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({ handleSubmit, handleOnChange, handleClose, rest }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Form</h5>
          <div className="close-btn" onClick={handleClose} style={{ cursor: 'pointer' }}><MdClose /></div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="reference" className="form-label">Reference:</label>
              <input type="text" className="form-control" id="reference" name="reference" onChange={handleOnChange} value={rest.reference} />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <input type="text" className="form-control" id="description" name="description" onChange={handleOnChange} value={rest.description} />
            </div>

            <div className="mb-3">
              <label htmlFor="is_retrocede" className="form-label">Is retrocede:</label>
              <div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="is_retrocede_yes" 
                    name="is_retrocede" 
                    value="true" 
                    onChange={handleOnChange} 
                    checked={rest.is_retrocede === "true"} 
                  />
                  <label className="form-check-label" htmlFor="is_retrocede_yes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    id="is_retrocede_no" 
                    name="is_retrocede" 
                    value="false" 
                    onChange={handleOnChange} 
                    checked={rest.is_retrocede === "false"} 
                  />
                  <label className="form-check-label" htmlFor="is_retrocede_no">No</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount:</label>
              <input type="number" className="form-control" id="amount" name="amount" onChange={handleOnChange} value={rest.amount} />
            </div>

            <div className="mb-3">
              <label htmlFor="amount_in_ref_currency" className="form-label">Amount in ref currency:</label>
              <input type="number" className="form-control" id="amount_in_ref_currency" name="amount_in_ref_currency" onChange={handleOnChange} value={rest.amount_in_ref_currency} />
            </div>

            <div className="mb-3">
              <label htmlFor="start_date" className="form-label">Start date:</label>
              <input type="date" className="form-control" id="start_date" name="start_date" onChange={handleOnChange} value={rest.start_date} />
            </div>

            <div className="mb-3">
              <label htmlFor="end_date" className="form-label">End date:</label>
              <input type="date" className="form-control" id="end_date" name="end_date" onChange={handleOnChange} value={rest.end_date} />
            </div>

            <div className="mb-3">
              <label htmlFor="start_date_refund" className="form-label">Start date refund:</label>
              <input type="date" className="form-control" id="start_date_refund" name="start_date_refund" onChange={handleOnChange} value={rest.start_date_refund} />
            </div>

            <div className="mb-3">
              <label htmlFor="end_date_refund" className="form-label">End date refund:</label>
              <input type="date" className="form-control" id="end_date_refund" name="end_date_refund" onChange={handleOnChange} value={rest.end_date_refund} />
            </div>

            <div className="mb-3">
              <label htmlFor="interest_rate" className="form-label">Interest rate:</label>
              <input type="number" className="form-control" id="interest_rate" name="interest_rate" onChange={handleOnChange} value={rest.interest_rate} />
            </div>

            <div className="mb-3">
              <label htmlFor="period" className="form-label">Period:</label>
              <input type="number" className="form-control" id="period" name="period" onChange={handleOnChange} value={rest.period} />
            </div>

            <div className="mb-3">
              <label htmlFor="grace_period" className="form-label">Grace period:</label>
              <input type="number" className="form-control" id="grace_period" name="grace_period" onChange={handleOnChange} value={rest.grace_period} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formtable



/*import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'


const Formtable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
    return (
        <div className="addContainer">

           <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleClose}><MdClose/></div> 
             <label htmlFor="reference"> Reference : </label>
             <input type="text" id="reference" name="reference" onChange={handleOnChange} value={rest.reference}/>
  
             <label htmlFor="description"> Description : </label>
             <input type="text" id="description" name="description" onChange={handleOnChange} value={rest.description}/>
  
             <label htmlFor="is_retrocede"> Is retrocede : </label>
             <input type="dropout" id="is_retrocede" name="is_retrocede" onChange={handleOnChange} value={rest.is_retrocede} />
  
             <label htmlFor="amount"> Amount : </label>
             <input type="number" id="amount" name="amount" onChange={handleOnChange} value={rest.amount}/>
  
             <label htmlFor="amount_in_ref_currency"> Amount in ref currency : </label>
             <input type="number" id="amount_in_ref_currency" name="amount_in_ref_currency" onChange={handleOnChange} value={rest.amount_in_ref_currency}/>
  
             <label htmlFor="start_date"> Start date : </label>
             <input type="date" id="start_date" name="start_date" onChange={handleOnChange} value={rest.start_date}/>
  
             <label htmlFor="end_date"> End date : </label>
             <input type="date" id="end_date" name="end_date" onChange={handleOnChange} value={rest.end_date}/>
  
             <label htmlFor="start_date_refund"> Start date refund : </label>
             <input type="date" id="start_date_refund" name="start_date_refund" onChange={handleOnChange} value={rest.start_date_refund}/>
  
             <label htmlFor="end_date_refund"> End date refund : </label>
             <input type="date" id="end_date_refund" name="end_date_refund" onChange={handleOnChange} value={rest.end_date_refund}/>
  
             <label htmlFor="interest_rate"> Interest rate : </label>
             <input type="number" id="interest_rate" name="interest_rate" onChange={handleOnChange} value={rest.interest_rate}/>
  
             <label htmlFor="period"> Period : </label>
             <input type="number" id="period" name="period" onChange={handleOnChange} value={rest.period}/>
  
             <label htmlFor="grace_period"> Grace period : </label>
             <input type="number" id="grace_period" name="grace_period" onChange={handleOnChange} value={rest.grace_period}/>
  
             <button className="btn"> Submit</button>
           </form>
        </div>
    )
}

export default Formtable*/



import React, { useState } from 'react';

export default function Form() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
      event.preventDefault();
     setSubmitting(true);
  
     setTimeout(() => {
       setSubmitting(false);
     }, 1000)
   }
  
    return(
      <div className="form-wrapper">
        <h2>Submit Your Order</h2>
        {submitting &&
         <div>Submitting Your Order...</div>
       }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Your Name</p>
              <input name="name" required/>
            </label>
            <label>
              <p>Your Mobile Phone</p>
              <input type="number" pattern="^-?[0-9]\d*\.?\d*$" required/>
            </label>
            <label>
              <p>Street Name</p>
              <input name="name" required/>
            </label>
            <label>
              <p>House Number</p>
              <input type="number" pattern="^-?[0-9]\d*\.?\d*$" required/>
            </label>
            <label>
              <p>Choose Delivery Time</p>
              <input type="radio" name="radio"  required/> In 30 minutes
              <input type="radio" name="radio"  required/> In 1 hour
              <input type="radio" name="radio"  required/> In 1,5 hour
            </label>
          </fieldset>
          <button type="submit" className="submit-order">Submit</button>
        </form>
      </div>
    )
};

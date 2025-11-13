import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form(){
    
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        phoneNumber:""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value }); 
    }
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log("Form Data: "+formData.name+" "+formData.email+" "+formData.phoneNumber);
        // alert("Form submitted! Check the console for details.");
        // alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}`);
        navigate('/submit',{state: formData});
        setFormData({
            name:"",
            email:"",
            phoneNumber:""
        });
        

    }

    return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <lable>
        Phone Number:
        <input name="phoneNumber" type="number" minLength={10} maxLength={10} value={formData.phoneNumber} onChange={handleChange} />
      </lable>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;    
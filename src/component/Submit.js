import { useLocation, useNavigate } from "react-router-dom";

function Submit(){

    const location = useLocation();
    const { name, email, phoneNumber } = location.state || {};

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/form');
    };

    const handleHome=()=>{
        navigate('/');
    }

    return(
        <div>
            <h2>Submit Component</h2>
            <p>Form submitted successfully!</p>
            Name: {name} <br/>
            Email: {email} <br/>
            PhoneNumber: {phoneNumber} <br/>  
            <br/>
            <button onClick={handleGoBack}>Fill New Form</button>
            <br/>
            <br/>
            <button onClick={handleHome}>Go to Home</button>
        </div>
    );
}

export default Submit;
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate('form');
    };

    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <p>Please fill the form </p>
            <button onClick={handleSubmit}>Go to Form</button>
        </div>
    );
}

export default Home;
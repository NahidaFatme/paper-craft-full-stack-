import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <p>this is home page</p>
        </div>
    );
};

export default Home;
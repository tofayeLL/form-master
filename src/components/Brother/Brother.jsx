import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg">
            <h2>Brother</h2>
            <p>Money: {money}</p>
            
        </div>
    );
};

export default Brother;
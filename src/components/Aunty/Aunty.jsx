import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg">
            <h1>Aunty</h1>

            <section className="flex gap-6 p-4">
            <Cousin name={'Mamshad'}></Cousin>
            <Cousin name={'Rubaiya'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)} className="btn"> Add 1000 tk</button>


            
        </div>
    );
};

export default Aunty;
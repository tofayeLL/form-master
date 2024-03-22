import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'Diamond';
    return (
        <div className="border-2 border-green-500  rounded-lg">
            <h2 className="p-4">Grandpa</h2>
            <p>Net money : {money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">

                    <section className="flex justify-center items-center gap-6 p-4 ">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>

                    </section>

                </AssetContext.Provider>
            </MoneyContext.Provider>



            {/* <div className="border-2 border-green-500 rounded-lg p-6">
                <Uncle></Uncle>
            </div>

            <div className="border-2 border-green-500 rounded-lg p-6">
                <Aunty></Aunty>
            </div> */}

        </div>
    );
};

export default Grandpa;
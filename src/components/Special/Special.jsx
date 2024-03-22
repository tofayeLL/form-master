import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext);
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg ">
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
            
        </div>
    );
};

export default Special;
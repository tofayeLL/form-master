import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg">
            <h1>DAD</h1>
            <section className="flex gap-6 p-4">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            
        </div>
    );
};

export default Dad;
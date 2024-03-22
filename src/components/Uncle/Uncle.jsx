import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg">
            <h1>Uncle</h1>
            <section className="flex gap-6 p-4">
                <Cousin name={'Rafsan'} asset={asset}></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </section>
            
        </div>
    );
};

export default Uncle;
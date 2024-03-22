import Special from "../Special/Special";


const Myself = ({asset}) => {
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg">
            <h2 className="p-4">Myself</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
            
        </div>
    );
};

export default Myself;
import Friend from "../Friend/Friend";
import Special from "../Special/Special";



const Cousin = ({name, asset }) => {
    return (
        <div className="border-2 border-green-400 p-4 rounded-lg">
            <h2 className="p-1">Cousin</h2>
            <p>{name}</p>
            <section>
                {
                    asset && <Special asset={asset}></Special>
                }
                {
                    name  === 'Rubaiya' && <Friend></Friend>
                }
            </section>
          
            
        </div>
    );
};

export default Cousin;
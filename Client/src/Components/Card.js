import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Bottom from "./Bottom";

const Card = ({plan}) => {
    
    
        return (
            <div className='cardWrapper'>
                
                <div className='electricity'>Electricity</div>
                <div className='solar'>Solar</div>
                <div className="card">
                    <Left plan={plan} />
                    <Middle plan={plan}/>
                    <Right plan={plan}/>
                </div>
                <Bottom plan={plan}/>
            </div>
        )
    


}
export default Card;
import Card from './Card'
const MinimumPlans=({minPlans})=>{
    
    const keys=Object.keys(minPlans);
    console.log(keys)
    return(
        <div>
            
            {
                keys.map(key=>{                    
                    return <Card plan={minPlans[key]}/>
                })
            }
        </div>
    )
}
export default MinimumPlans;
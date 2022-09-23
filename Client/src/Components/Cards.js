import { getPlans } from "../Controllers/getData";
import { useEffect, useState } from 'react'
import Card from "./Card";
const Cards=()=>{
    const [plans, setPlans] = useState(null)

    useEffect(()=>{
        
        const fun=async()=>{
            const x=await getPlans()
            setPlans(x)
            
        }
        fun()
        
    },[])
    

    if (!plans) {
        return '...loading'
    }
    else
    {
        return(
            <div>
                {
                    plans.electricity.map(plan=>{
                        return <Card plan={plan}/>
                    })
                }
            </div>
        )
    }
}
export default Cards;
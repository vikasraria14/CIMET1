import { getPlans } from "../Controllers/getData";
import { useEffect, useState } from 'react'
import Card from "./Card";
import MinimumPlans from "./MinimumPlans";
const Cards = () => {
    const [plans, setPlans] = useState(null)
    const [minPlans, setMinPlans] = useState({})
    const [showMin, setShow] = useState(false)

    useEffect(() => {

        const fun = async () => {
            let minPlans1 = {};
            const x = await getPlans()


            x.electricity.map(plan => {
                const y = plan.billing_options;
                if (minPlans1.hasOwnProperty(y)) {
                    if (minPlans1.estimated_cost > plan.estimated_cost) {
                        minPlans1 = plan;
                    }
                }
                else {
                    const x = plan.billing_options;
                    minPlans1[x] = plan
                }
                return minPlans1;
            })


            setMinPlans(minPlans1)
            setPlans(x)




        }
        fun()

    }, [])

    const toggleMin = () => {
        setShow(!showMin);
    }

    if (!plans) {
        return '...loading'
    }
    else if (showMin) {
        return (
            <div>
                <button onClick={toggleMin}>Hide Minimum Plans</button>
                <MinimumPlans minPlans={minPlans} />
            </div>
        )
    }
    else {
        return (
            <div>
                <button onClick={toggleMin}>Show Minimum Plans</button>
                {
                    plans.electricity.map(plan => {
                        return <Card plan={plan} />
                    })
                }

            </div>
        )
    }
}
export default Cards;
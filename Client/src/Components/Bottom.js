const Bottom=({plan})=>{
    const data=plan.dmo_content.Ausgrid
    return(
        <div className='bottom'>
            <div className='bottomTop'>
                <span  dangerouslySetInnerHTML={{__html: data}}/>
            </div>
            <div className='bottomBottom'>
                <div className='terms'>
                    <ul>
                        <li>10 business days cooling off period</li>
                        <li>Secure SignUp in 5 minutes </li>
                        <li>Save time and effort</li>
                    </ul>
                    
                    <p>^ The estimated cost includes any applicable welcome credits, bonuses, and conditional discounts (if applicable) 
                    which apply within 12 months of plan</p>
                </div>
                <button>Connect Online Today</button>
            </div>
            
        </div>
    )
}
export default Bottom;
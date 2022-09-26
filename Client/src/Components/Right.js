const Right=({plan})=>{
    return(
        <div className='right'>
            <span className="highlight" >${plan.billing_options} Plan</span>
           <div className='table'>
            <div className='tableTop'> Estimated Cost </div>
            <div className='tableBottom'>
                
                <span className='year'>${plan.expected_bill_amount}^</span>/yr<br/>
                <span className='month'>${plan.expected_monthly_bill_amount}^</span>/mo
            </div>
           </div>
        </div>
    )
}
export default Right;
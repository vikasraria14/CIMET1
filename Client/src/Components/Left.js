const Left=({plan})=>{
    const image=plan.provider.logo;
    return (
        
        <div className='left'>
            
            <img alt="" src={image}/>
            <br/>
            <p className="highlight">View Details</p>
            <br/>
            <p className="highlight">Basic Plan information Document</p>
        </div>
    )
}
export default Left;
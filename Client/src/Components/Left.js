const Left=({plan})=>{
    const image=plan.provider.logo;
    return (
        
        <div className='left'>
            
            <img alt="" src={image}/>
            <br/>
            <c>View Details</c>
            <br/>
            <c>Basic Plan information Document</c>
        </div>
    )
}
export default Left;
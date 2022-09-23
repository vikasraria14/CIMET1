
const Middle = ({plan}) => {
    const data1 = plan.dmo_percentage.Ausgrid
    const data2 = plan.plan_name_below_data
    // const data3=plans.plan_features
    const data3 = plan.contract_length;
    const data4 = plan.view_benefit;
    const data5 = plan.view_contract;
    const data6 = plan.view_exit_fee;
    return (
        <>

            <div className='middle'>
                <div className='middleTop'>
                    <span dangerouslySetInnerHTML={{ __html: data1 }} /><br />
                    <span dangerouslySetInnerHTML={{ __html: data2 }} />
                </div>


                <ul>
                    <li dangerouslySetInnerHTML={{ __html: data3 }} />
                    <li dangerouslySetInnerHTML={{ __html: data4 }} />
                    <li dangerouslySetInnerHTML={{ __html: data5 }} />
                    <li dangerouslySetInnerHTML={{ __html: data6 }} />
                </ul>

                <p className='middleBottom'>Standard feed in Tarrif: 5c</p>

            </div>
        </>
    )
}
export default Middle;
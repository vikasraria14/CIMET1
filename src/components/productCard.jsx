const ProductCard = ({ product }) => {
  const {
    provider_image,
    benefit_term,
    contract_length,
    expected_annually_bill_amount,
    expected_monthly_bill_amount,
    dmo_content: { Ausgrid },
  } = product;
  return (
    <div className=" flex flex-col border border-gray m-4 rounded">
      <div className="flex gap-4 relative p-4">
        <span className="bg-placeholder rounded px-1 absolute -top-3">
          Electricity
        </span>
        <span className="bg-placeholder rounded px-1 absolute -top-3 left-28">
          Solar
        </span>
      </div>
      <div className="flex w-full justify-around mt-6">
        <div className="flex flex-col items-center">
          <img src={provider_image} alt="logo" className="w-16 h-auto" />
          <a href="httpx://">View Details</a>
          <a href="https://">Basic Plan Information Document</a>
        </div>
        <div className="flex flex-col items-center">
          <p className="bg-placeholder p-2 rounded">
            29% less than the current eference price
          </p>
          <div>
            <span>{benefit_term} energy plan period</span>
            <span>{contract_length}</span>
          </div>
          <p className="bg-lightblue px-1">@ standard feed in Tariff</p>
        </div>
        <div className="flex flex-col bg-lightblue w-52 items-start rounded overflow-hidden">
          <p className="bg-blue text-white w-full">Estimated cost</p>
          <div className="mt-4 ml-2">
            <p className="text-blue text-2xl font-bold">
              ${expected_annually_bill_amount}
              <span className="text-sm text-placeholder">/yr</span>
            </p>
            <p className="text-blue font-bold">
              ${expected_monthly_bill_amount}
              <span className="text-sm text-placeholder">/mo</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4">{Ausgrid}</div>
      <div className="flex justify-between bg-placeholder p-4">
        <div>
          <div>
            <p>10 business days cooling off period</p>
            <p>Secure signup in 5 mins</p>
            <p>Save time and effort</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            veniam qui eveniet explicabo eaque impedit minus architecto omnis
            ea!
          </p>
        </div>
        <button className="bg-blue text-white px-4 rounded-2xl">
          Connect Online Today
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

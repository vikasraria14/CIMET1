import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";

const ListingPage = () => {
  const [token, setToken] = useState(undefined);
  const [dataList, setDataList] = useState([]);

  const generateToken = async () => {
    const data = "4NKQ3-815C2-8T5Q2-16318-55301";
    try {
      await axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://devcore02.cimet.io/v1/generate-token",
          data,
          {
            headers: {
              "api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
            },
          }
        )
        .then((response) => setToken(response.data.data.token));
    } catch (err) {
      console.error("Error", err);
    }
  };

  useEffect(() => {
    generateToken();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = {
        session_id:
          "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
      };
      try {
        await axios
          .post(
            "https://cors-anywhere.herokuapp.com/https://devcore02.cimet.io/v1/plan-list",
            data,
            {
              headers: {
                "api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
                "auth-token": token,
              },
            }
          )
          .then(
            (response) => setDataList(response.data.data.electricity),
            (response) => console.log(response.data.data)
          );
      } catch (err) {
        console.error("Error", err);
      }
    };
    fetchProducts();
  }, [token]);

  return (
    <>
      {dataList.length === 0 ? (
        <h1 className="text-center text-4xl font-extrabold mt-40">
          Loading...
        </h1>
      ) : (
        dataList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </>
  );
};

export default ListingPage;

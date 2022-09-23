import axios from "axios";

export const getToken = async () => {
    
    const res = await axios.get("http://localhost:3008/get_token")
    const token = res.data.data.token;
    return token;
}

export const getPlans = async () => {
    const token=await getToken();
    let config = {
        headers: {
            "auth": token
        }
    }
    
    const res=await axios.get("http://localhost:3008/get_plans", config)
    
    return res.data.data;
}


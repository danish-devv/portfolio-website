import api from "./axios.js"

export const contactApi=async (formData)=>{
    const res=await api.post("/contact",formData)
    return res.data
}

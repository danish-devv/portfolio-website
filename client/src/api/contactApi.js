import api from "./axios.js"

export const contact=async (formData)=>{
    const res=await api.post("/contact",formData)
    return res.data
}

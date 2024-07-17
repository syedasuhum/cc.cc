
//  api to get all products 
export const fetchAllProducts = async (limit,setError,setWating,setProducts,setLimit,setTotal)=>{
    try {
        setWating(true)
        let result = await fetch(`https://localhost:8080/api/v1/products/getallproducts/${limit}`)
        result = await result.json()
        console.log(result)
        setWating(false)
        if(result.error){
            setError(true)
        }
        else{
            setProducts(result.products)
            setTotal(result.total)
            setError(false)
            setLimit(limit+10)
        }
    } catch (error) {
        setError(true)
        console.log(error)
    }
}


// api to get one product
export const getOneProduct =async(id,setWating,setProdut,setError)=>{
    try {
        setWating(true)
        let result = await fetch(`https://localhost:8080/api/v1/products/getOneProduct/${id}`)
        result = await result.json()
        setWating(false)
        if(result.error){
            setError(true)
        }
        else{
            setProdut(result)
        }
    } catch (error) {
        console.log(error)
        setError(true)
    }
}
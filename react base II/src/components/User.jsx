import { useState, useEffect } from 'react'
import axios from "axios"

const User = () => {

    const [jsonData, setJsonData] = useState([])
    const [searchItem, setSearchItem] = useState({limit:0,item:""})

    let searchUrl = `https://dummyjson.com/products/search?limit=${searchItem.limit}&q=${searchItem.item}`

    const apiFetch = async () => {
        // console.log("The search Url for api is : ",searchUrl)
        try {
            const response = await axios.get(searchUrl)
            const data = response.data
            setJsonData(data.products)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSearchBtn = (event) => {
        if (event.target.name === "item") {
            setSearchItem({ ...searchItem, item: event.target.value })
        }
        if (event.target.name === "limit") {
            setSearchItem({ ...searchItem, limit: event.target.value })
        }
    }


    useEffect(() => {
        apiFetch()
    }, [searchItem])


    return (
        <>
            <input type="text" name='item' placeholder='Search'  onChange={handleSearchBtn} />
            <select name="limit" id="" onChange={handleSearchBtn}>
                <option value="20">max 20</option>
                <option value="50">max 50</option>
                <option value="100">max 100</option>
            </select>

            <ol>
                {
                    jsonData.map((product) => {
                        return <li key={product.id}> {product.title} </li>
                    })
                }
            </ol>
        </>
    )
}

export default User
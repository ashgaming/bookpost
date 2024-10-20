import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backend } from '../../../Connection/conn'

const ListMyStoryes = () => {
    const [options,setOptions] = useState([])
    const [loading,setLoading] = useState(false)
    const ExtractStory = async () => {
        try{
            setLoading(true)
            const {data} = await axios.get(`${backend}/api/story/list`)
            setOptions(data)
            setLoading(false)
            console.log('hit')
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
   
    useEffect(()=>{
        if(!options[0]?._id){
            ExtractStory();
        }
    },[options])

    const HandleChange = () => {

    }

    return (
        <div className="mt-1 relative rounded-md shadow-sm">
            <select
                id="story"
                onChange={() => HandleChange}
                className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
            >
                <option value={''}>select</option> 
               {loading && <option>Loading</option> }
                {
                    options.map((item, index) => (
                        <option value={item._id} key={index}> {item.name} </option>
                    ))
                }

            </select>
        </div>
    )
}

export default ListMyStoryes

import { useState } from "react"
import App from "../App"

const AddBook = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        price: "",
    })
    
    const addABook = (e) =>{
        e.preventDefault()

        //console.debug(formData)
        const req = new Request(
            'http://localhost:3000/admin/savebook', {
            method: "POST",
                headers : {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        )
    
        fetch(req)
            .then(res => res.json())
            .then(data => {
                //console.log(data)

            })
            .catch(err => console.error(err))

    }
    

    const handleChange = (e) => {
        // console.warn(e.target.id,e.target.value)
        if (e.target.id == "price") {
            if (isNaN(e.target.value))
                alert("Please enter a number")
            return
        }

        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    
    return (
        
        <div>
            <p className="=text-x1">Add A Book</p>


            <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="Title" name="Title" id="Title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required onChange={handleChange} />
                    <label htmlFor="Title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="Author" name="Author" id="Author" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                    <label htmlFor="Author" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="Price" name="Price" id="Price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange}  />
                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>


                <button type="submit" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addABook}>Submit</button>
            </form>

        </div>
    )
}

export default AddBook

import React, { useState } from 'react'
import '../../Commonformstyle.css'

const Hometemplate = () => {


    const [hrs, sethrs] = useState()
    const [placeType, setplaceType] = useState("")
    const [placeName, setplaceName] = useState()
    const [location, setlocation] = useState()
    const [area, setarea] = useState()
    const [img, setimg] = useState()
    const [highlights, sethighlights] = useState()
    const [heading, setheading] = useState()
    const [wedo, setwedo] = useState()


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(hrs);
        console.log(placeType);
        console.log(placeName);
        console.log(location);
        console.log(area);
        console.log(img);
        console.log(highlights);
        console.log(wedo);
    }
    return (
        <div>
            <div className='commonFormStyle'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <h1>home Template</h1>
                    <div>
                        <label>HRS</label>
                        <input type='number' value={hrs} onChange={(e) => sethrs(e.target.value)} required/>
                    </div>
                    <div>
                        <label>place name</label>
                        <select value={placeType} onChange={(e) => setplaceType(e.target.value)} required>
                            <option value={"select"}>select u want</option>
                            <option value={"mall"}>mall</option>
                            <option value={"cinema"}>cinema</option>
                            <option value={"lake"}>lake</option>
                        </select>
                    </div>
                    <div>
                        <label>name</label>
                        <input type='text' placeholder=' prozone mall' value={placeName} onChange={(e) => setplaceName(e.target.value)} required/>
                    </div>
                    <div>
                        <label>location</label>
                        <input type='text' value={location} onChange={(e) => setlocation(e.target.value)} required />
                    </div>
                    <div>
                        <label>start area</label>
                        <input type='text' value={area} onChange={(e) => setarea(e.target.value)} required/>
                    </div>
                    <div>
                        <label>img</label>
                        <input type='file' value={img} onChange={(e) => setimg(e.target.value)} required />
                    </div>
                    <div>
                        <label>place highlights</label>
                        <textarea placeholder='only give simple 3 key points' value={highlights} onChange={(e) => sethighlights(e.target.value)} required/>
                    </div>
                    <div>
                        <label>heading</label>
                        <input type='text' value={heading} onChange={(e) => setheading(e.target.value)} required />
                    </div>
                    <div>
                        <label>what u do</label>
                        <textarea placeholder='only give simple 3 key points' value={wedo} onChange={(e) => setwedo(e.target.value)} required/>
                    </div>
                    <button type='submit'>make home Template</button>
                </form>
            </div>
        </div>
    )
}

export default Hometemplate

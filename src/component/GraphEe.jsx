import React, { useEffect, useState } from 'react'

import "./GraphEe.css"
import { createTheme } from '@mui/material/styles'
import Slider from '@mui/material/Slider'
import { red } from '@mui/material/colors';
import Moment from 'moment'
import { format } from 'date-fns'





export const GraphEe = () => {

    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })


    const [dateA, setDateA] = useState(Date.parse("06/01/2022"))
    const [dateB, setDateB] = useState(Date.parse("01/08/2023"))
    const [date, setdate] = useState(Moment().format("MM/DD/YYYY"))
    const [dateD, setdateD] = useState('Today')
    // date format m/d/y
    console.log(date);
    const [currDate, setCurrDate] = useState(Date.parse(date))


    const daydiff = parseInt(dateB - dateA) / (1000 * 60 * 60 * 24)
  
   
    const [rangeinput, setRangeinput] = useState(currDate)



    const inputhandler = (e) => {
        if(e.target.value == currDate){
            setdateD("Today")
            setRangeinput(e.target.value)
        }else{
            setRangeinput(e.target.value)
            console.log(e.target.value);
            const dD = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(e.target.value)
            setdateD(dD)
        }
        
    }

    return (
        <>
            <div className="container">
                <div className="graphEcontent mt-5">
                    <h1 className='gEhead'>Timeline</h1>
                    <div className="grpEpara">
                        <p>By recording your data daily, it allows us to analyze it and offer an approximate forecast by which you could attain your desired weight. Of course, this data can often change as the more data we have, the more precise we can become in anticipating such a date.</p>
                    </div>
                    <div className="grpE mt-5">
                        <div className="flexdate">
                            <div className="">
                                {longEnUSFormatter.format(dateA, 'yyyy/mm/dd')}

                            </div>
                            <div className="">
                                {longEnUSFormatter.format(dateB, 'yyyy/mm/dd')}

                            </div>

                        </div>


                        <div className='Eflex'>
                            <div className="rangeleft"></div>
                            <Slider
                                min={dateA}
                                max={dateB}
                                defaultValue={currDate}
                                onChange={inputhandler}
                                step={1000*60*60*24}
                                valueLabelDisplay='on'
                                valueLabelFormat={dateD}


                            />
                            <div className='rangeright'></div>
                        </div>

                        <div className="grpEflex">

                            <div>
                                <h5 className='h5topr'>{Math.round(((rangeinput-dateA) / (dateB-dateA)) * 100) + "%"}</h5>
                                <h5 className='h5bottom'>{(rangeinput-dateA)/(1000*60*60*24)} days done</h5>
                            </div>
                            <div>
                                <h5 className='h5top'>{Math.round(100-(((rangeinput-dateA) / (dateB-dateA)) * 100)) + "%"}</h5>
                                <h5 className='h5bottom'>{(dateB-rangeinput)/(1000*60*60*24)} days to go</h5>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

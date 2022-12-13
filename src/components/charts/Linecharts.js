import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { AreaChart, linearGradient, Area, ResponsiveContainer } from 'recharts';
import drop from "../../assets/drop-down-icon.ico"
const Linecharts = () => {

    const data = [

        {
            month: "Jan",
            dollar: "$5K",
            sold: 18,
            views: 15
        },
        {
            month: "Feb",
            dollar: "$10K",
            sold: 8,
            views: 10
        },
        {
            month: "Mar",
            dollar: "$15K",
            sold: 17,
            views: 15
        },
        {
            month: "Apr",
            dollar: "$20K",
            sold: 12,
            views: 19
        }, {
            month: "May",
            dollar: "$25K",
            sold: 17,
            views: 23
        },
        {
            month: "Jun",
            dollar: "$25K",
            solid: 25,
            views: 15
        },
    ]




    return (
        <div>
            <div className="Statistics space-between ">
                <h6 className='Statistics-title'>Statistics</h6>
                <h6 className='Statistics-title d-flex align-items-center'>Last 6 months <span><img src={drop} className="img-fluid" /></span></h6>

            </div>
            <div className="line-chart-section mt-4">

            <ResponsiveContainer width="100%" height={400}>
                    <AreaChart  data={data} margin={{ top: 40, right: 0, left: -20, bottom: -10 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis type="category"  />
                        <CartesianGrid strokeDasharray="3 3" stroke='#EAF0F4' />
                        <Tooltip />
                        <Area type="monotone" dataKey="sold" stroke="#B5B3FB" fill="url(#colorUv)" strokeWidth={2} />
                        <Area type="monotone" dataKey="views" stroke="#80E2FF" fill="url(#colorPv)" strokeWidth={2} />
                        <Legend />
                    </AreaChart>
                    </ResponsiveContainer >


                    






            </div>
        </div>
    )
}

export default Linecharts
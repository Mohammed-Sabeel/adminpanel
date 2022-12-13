import React from 'react'

const RefferTable = () => {


    const tableData = [
        {
            location: "google.com",
            views: "3746",
            sales: "752",
            conversion: "43%",
            total:"$19,291"
        },
        {
            location: "facebook.com",
            views: "8126",
            sales: "728",
            conversion: "32%",
            total:"$17,638"
        },
        {
            location: "google.com",
            views: "3746",
            sales: "752",
            conversion: "43%",
            total:"$16,218"
        },
        {
            location: "twitter.com",
            views: "8836",
            sales: "694",
            conversion: "28%",
            total:"$14,421"
        },
        {
            location: "Direct, email, IM",
            views: "1173",
            sales: "645",
            conversion: "24%",
            total:"$12,370"
        },
        {
            location: "linkedin.com",
            views: "2739",
            sales: "539",
            conversion: "20%",
            total:"$12,370"
        },
        {
            location: "instagram.com",
            views: "2739",
            sales: "539",
            conversion: "20%",
            total:"$12,370"
        },
    ]
















    return (
        <div className='table-responsive'>
            <table class="table reffer_table " >
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Views</th>
                        <th scope="col">Sales</th>
                        <th scope="col">Conversion</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        tableData.map((currEle) => {
                            return (
                                <>

                                    <tr>
                                        <td >{currEle.location}</td>
                                        <td>{currEle.views}</td>
                                        <td>{currEle.sales}</td>
                                        <td>{currEle.conversion}</td>
                                        <td>{currEle.total}</td>
                                        
                                    </tr>


                                </>
                            )
                        })
                    }


                </tbody>
            </table>


        </div>
    )
}

export default RefferTable
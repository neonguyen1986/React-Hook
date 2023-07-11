import { useEffect, useState } from "react";
import useFetch from "../customize/Fetch";
import { v4 as uuidv4 } from 'uuid'


const Covid = () => {
    const options = {
        method: 'GET',
        url: 'https://covid-italy-statistics.p.rapidapi.com/statistics/compressed',
        headers: {
            'X-RapidAPI-Key': '1d735e1143msh0e2877fd0b084c7p16fe80jsn5b8aa8f571e4',
            'X-RapidAPI-Host': 'covid-italy-statistics.p.rapidapi.com'
        }
    };

    const { data: dataCovid, loading, errMsg } = useFetch(options)


    return (
        <>
            <table id="customers">
                {console.log('>>>check data covid:', dataCovid)}
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>


                    {errMsg === false && loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={uuidv4()}>
                                    <td>{item.lastUpdatedTime}</td>
                                    <td>{item.state}</td>
                                    <td>{item.confirmed}</td>
                                    <td>{item.active}</td>
                                    <td>{item.recovered}</td>

                                </tr>
                            )
                        })}
                    {loading === true &&
                        <tr>
                            <td colSpan='5'>LOADING...</td>
                        </tr>
                    }
                    {errMsg === true &&
                        <tr>
                            <td colSpan='5'>Something Wrong...</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default Covid;
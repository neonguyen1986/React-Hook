import { useEffect, useState } from "react";
import axios from 'axios';
import { uuid } from 'uuidv4'
import moment from 'moment'

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([])

    const options = {
        method: 'GET',
        url: 'https://covid-italy-statistics.p.rapidapi.com/statistics/compressed',
        headers: {
            'X-RapidAPI-Key': '1d735e1143msh0e2877fd0b084c7p16fe80jsn5b8aa8f571e4',
            'X-RapidAPI-Host': 'covid-italy-statistics.p.rapidapi.com'
        }
    };

    //Giống componentDidMount trong class
    useEffect(async () => {
        try {
            const res = await axios.request(options);
            console.log(res.data);
            let data = res && res.data && res.data.regions ? res.data.regions : []

            //chuyển ngày
            if (data && data.length > 0) {
                data.map(item => {
                    return (
                        item.lastUpdatedTime = moment(item.lastUpdatedTime).format('YYYY/MM/DD')
                    )
                })
            }

            setDataCovid(data)
        } catch (error) {
            console.error(error);
        }
        // let res = await axios.get('https://api.covidtracking.com/v1/states/daily.json')
        // let data = res && res.data ? res.data : []
        // setDataCovid(data)
        // // console.log('>check respond: ', res.data)
    }, []);

    return (
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
                {dataCovid && dataCovid.length > 0 &&
                    dataCovid.map(item => {
                        return (
                            <tr key={uuid()}>
                                <td>{item.lastUpdatedTime}</td>
                                <td>{item.state}</td>
                                <td>{item.confirmed}</td>
                                <td>{item.active}</td>
                                <td>{item.recovered}</td>

                            </tr>
                        )
                    })}

            </tbody>
        </table>
    )
}

export default Covid;
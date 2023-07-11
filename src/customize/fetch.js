import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment'


const useFetch = (url) => { //phải bắt đầu bằng use để React hiểu đây là custom Hook
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [errMsg, setErrMsg] = useState(false)

    //Giống componentDidMount trong class
    useEffect(() => {
        // setTimeout(async () => {
        const ourRequest = axios.CancelToken.source()//1st step
        async function fetchData() {
            try {

                const res = await axios.request(
                    url,
                    {
                        CancelToken: ourRequest.token,//2nd step
                    });
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

                setData(data)
                setLoading(false)
                setErrMsg(false)
            }
            catch (e) {
                if (axios.isCancel(e)) {
                    console.log('>>>request canceled', e.message)
                } else {
                    setErrMsg(true)
                    setLoading(false)//để ko hiển thị Loading nữa
                }
            }
        }
        fetchData();
        return () => {
            ourRequest.cancel('Cancel by user')//3rd step
        }
        // }, 2000)
        // let res = await axios.get('https://api.covidtracking.com/v1/states/daily.json')
        // let data = res && res.data ? res.data : []
        // setData(data)
        // // console.log('>check respond: ', res.data)
    }, []);
    // }, [url]); ta sẽ thêm url nếu muốn chạy nhiều lần khi ngày thay đổi

    return {
        data, loading, errMsg
    }
}

export default useFetch;
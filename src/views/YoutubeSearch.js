import './YoutubeSearch.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from 'moment'

const YoutubeSearch = () => {
    const [video, setVideo] = useState([]);
    const [query, setQuery] = useState([]);
    useEffect(() => {

    }, [])

    const handleSearchYT = async () => {
        //Get API from youtube
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyA1bt7wADUdM4k04UdYGjYyS4sL-p5vhd8',
                'q': query
            }
        })
        //print the result
        console.log('>>>check res youtube: ', res)

        //assign res object to "result" array
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {}
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }
            console.log(">>>check result:", result)
            setVideo(result)
        }
    }
    return (
        <>
            <div className="youtube-search-container">
                <div>
                    <input type='text' className="yt-search" placeholder='Seach from Youtube'
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button type="button" onClick={handleSearchYT}>Search</button>
                </div>
            </div>
            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe
                                    className='yt-iframe'
                                    src={`https://www.youtube.com/embed/${item.id}`}//<--edit here
                                    title={item.title}//<--edit here
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    {item.title}   {/*edit here */}
                                </div>
                                <div className='created-at'>
                                    Created At: {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss A')}{/*edit here */}
                                </div>
                                <div className='author'>
                                    Author: {item.author}{/*edit here */}
                                </div>
                                <div className='description'>
                                    Description: {item.description}{/*edit here */}
                                </div>
                            </div>

                        </div>
                    )
                })}

        </>
    )
}

export default YoutubeSearch
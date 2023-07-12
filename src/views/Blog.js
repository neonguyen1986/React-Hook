import useFetch
    from "../customize/Fetch";
import './Blog.scss'
import { Link } from 'react-router-dom'

const Blog = () => {
    const { data: dataBlog, loading, errMsg } = useFetch('https://jsonplaceholder.typicode.com/posts', false, true)

    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 20)
    }
    console.log('>>>>check data:', newData)
    return (
        <>
            <div>
                <button className='btn-add'>
                    <Link to={'/add-new-blog'}>+ Add new blog</Link>

                </button>
            </div>
            <div className="blog-container">
                {loading === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div className='singleBlog' key={item.id}>
                                <div className='title'>{item.title}</div>
                                <div className='content'>{item.body}</div>
                                <button>
                                    <Link to={`/blog/${item.id}`}>View Detail</Link>
                                </button>
                            </div>
                        )
                    })}
                {loading === true &&
                    <div>Loading Data...</div>
                }
            </div>
        </>
    )
}
export default Blog;
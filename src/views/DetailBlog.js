import useFetch from "../customize/Fetch"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    let { id } = useParams()
    const { data: dataDetailBlog, loading, errMsg } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false, true)
    console.log('>>>check detail', dataDetailBlog)

    const history = useHistory();
    const handleClickBack = () => {
        history.push('/blog')
    }

    return (
        <div>
            {dataDetailBlog &&
                <>
                    <div>Title: {dataDetailBlog.title}</div>
                    <div>Body: {dataDetailBlog.body}</div>
                    {/* cách 1: Viết button đơn giản: nhược là phải gọi lại data trên API, gây chậm, tiêu tốn dữ liệu */}
                    {/* <button>
                <Link to='/blog'>Back</Link>
            </button> */}
                    {/* cách 2: dùng history*/}
                    <button onClick={() => handleClickBack()}>
                        Back
                    </button>
                </>
            }
        </div>
    )
}
export default DetailBlog
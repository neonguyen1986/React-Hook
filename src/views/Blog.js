import useFetch
    from "../customize/Fetch";
import './Blog.scss'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AddNewBlog from "./AddNewBlog";

const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, loading, errMsg } = useFetch('https://jsonplaceholder.typicode.com/posts', false, true)

    // ta phải để quá trình setNewData này trong useEffect để tránh TH bị render quá nhiều gây ra lỗi
    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newData1 = dataBlog.slice(0, 20)
            setNewData(newData1)
        }
        console.log('>>>>check data:', newData)
    }, [dataBlog])


    const handleAddNew = (blog) => {
        let newData2 = newData;
        newData2.unshift(blog);
        setShow(false);//setShow phải để đúng vị trí để đúng thứ tự
        setNewData(newData2);
    }

    const handleDeleteBlog = (id) => {
        let newData3 = newData
        newData3 = newData3.filter(item => item.id !== id)
        setNewData(newData3)
    }
    return (
        <>

            <>
                <Button variant="primary" onClick={handleShow} className='my-3'>
                    + Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNew={handleAddNew} />
                    </Modal.Body>
                </Modal>
            </>

            <div className="blog-container">
                {loading === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div className='singleBlog' key={item.id}>
                                <div className='title'>{item.title}</div>
                                <div className='content'>{item.body}</div>
                                <span>
                                    <button>
                                        <Link to={`/blog/${item.id}`}>View Detail</Link>
                                    </button>
                                    <button
                                        onClick={() => handleDeleteBlog(item.id)}
                                    >Delete</button>
                                </span>
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


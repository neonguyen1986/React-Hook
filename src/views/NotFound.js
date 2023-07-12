import { useHistory } from 'react-router-dom'
const NotFound = () => {
    const history = useHistory();
    const handleHomePage = () => {
        history.push('/')
    }

    return (
        <div className="notFound">
            <h2>404: This Page Isn't Available</h2>
            <button className="btn btn-primary"
                onClick={handleHomePage}>Go To Homepage
            </button>
        </div>
    )
}

export default NotFound
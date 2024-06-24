import { Link } from "react-router-dom"

const Button = () => {
    return (
        <>
            <div>
                <Link to='/all' ><button>ALL</button></Link>
                <Link to='/videos'><button>Videos</button></Link>
                <Link to='/images'><button>Images</button></Link>
            </div>
        </>
    )
}

export default Button
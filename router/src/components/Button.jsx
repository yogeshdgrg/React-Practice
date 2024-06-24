import { Link } from "react-router-dom"
const Button = () => {
    return (
        <>
            <Link to='/videos' >Videos</Link>
            <Link to='/images' >Image</Link>
            <Link to='/all' >All</Link>
        </>
    )
}

export default Button
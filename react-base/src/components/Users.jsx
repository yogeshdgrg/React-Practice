
const Users = () => {
    const handleGrandBtn = () => {
        console.log("Clicked Grand Parent Button...")
    }
    const handleParentBtn = () => {
        console.log("Clicked Parent Button...")
    }
    const handleChildBtn = (event) => {
        console.log("Clicked Child Button...")
        event.stopPropagation()
    }
    return (
        <>
            <button onClick={handleGrandBtn} >Grand parent
                <button onClick={handleParentBtn} >Parent Button
                    <button onClick={handleChildBtn} >Child Button</button>
                </button>
            </button>
        </>
    )
}

export default Users
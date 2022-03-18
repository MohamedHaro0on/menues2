

const Categories = ({catHandler})=>{
    const  allCategrories = ["all" , "breakfast" , "lunch" , "shakes"];
    
    return (
        <ul className = "catList">
            {allCategrories.map((element , index )=><li className = "catItem" key = {index}><button onClick={()=> catHandler(element)}>{element}</button></li>)}
        </ul>
    )
}

export default Categories ;
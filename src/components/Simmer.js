const Simmer = () => {
   
    return (
        <>
            <div className="simmerDiv">
                {Array(20).fill("").map((e, index) => {
               return <div key={index} className="simmer-card"></div> 
           })}

           </div>
        </>
    )

}

export default Simmer
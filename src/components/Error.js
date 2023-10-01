import {useRouteError} from "react-router-dom"


const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err//destructuring
    return (
        <>
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong</h2>
            <h2>{status+ " : " + statusText}</h2>
        </>
   ) 
}

export default Error
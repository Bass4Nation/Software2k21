import { useRouter } from "next/dist/client/router"


const dashboard = () => {
    const router = useRouter()

    // const createPage = (
        
    // )

    const handleShowAllBtn = () =>{
        router.push('/dashboard/view')
    }
    const handleCreateBtn = () =>{
        router.push('/dashboard/create')

    }


    return(
        <>
        <p>Her kommer bruker siden til å være</p>
        <button onClick={handleShowAllBtn}>Mine Annonser</button>
        <button onClick={handleCreateBtn}>Lag annonse</button>
        </>


    )

}

export default dashboard
import NavComponent from "./NavComponent"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUser } from '../hooks/useUser'
import { makeAdmin, removeAdmin } from '../lib/utils/user'

const Nav = () =>{
    const { user, admin, setSelectedUser } = useUser()
    const router = useRouter()

    console.log(user)
    console.log(admin)
  
    const navElements = [
        {link: '/', lable: 'Show all'},
        // {link: 'link adresse', lable: 'nav tab title'},
    ]

    const navList = navElements.map((single) => (
        <NavComponent key={single.lable} data={single}/>
    ))

    return(
        <>
        <ul>
        {navList}
        <li><input type = "text" placeholder="Søkefelt" ></input></li>
        {admin ? 
        (<li><Link href={`/dashboard/`+ user.username}>{user.username}</Link></li>)
         :
         (<li><Link href={`/user/login`} >Login</Link></li>)}
        </ul>
        </>
    )
}

export default Nav
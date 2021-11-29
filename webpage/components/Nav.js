import NavComponent from "./NavComponent"
import Link from 'next/link'
const Nav = () =>{

    const navElements = [
        {link: '/', lable: 'Show all'},
        // {link: 'asnasfn', lable: 'element 2'},
        // {link: 'asnasfn', lable: 'element 3'},
    ]

    const navList = navElements.map((single) => (
        <NavComponent data={single}/>
    ))

    return(
        <>
        <ul>
        {navList}
        <li><input type = "text" placeholder="Søkefelt" ></input></li>
        <li><Link href={`/user/login`} >Login</Link></li>
        </ul>
        </>
    )
}

export default Nav
import Link from 'next/link'


const NavComponent = ({data}) =>{
    return(
        <>
        <li><Link href={data.link}>{data.lable}</Link></li>
        </>
    )
}

export default NavComponent
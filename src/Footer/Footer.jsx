import React from 'react'
import Link from '../Components/Link';
import { footer } from '../Data/Data';
const Footer = () => {
    
  return (
    <footer className="  flex-end md:justify-center w-screen self-end">
    <ul className=" flex flex-col sm:flex-row flex-wrap nav justify-center pb-3 mb-3 mx-2 border-b-2">
        {
            footer.map(link => <li key={"footer "+link.innerText} className="nav-item py-1 hover:text-slate-500 "><Link href={link.href} className={link.ClassName}>{link.innerText}</Link></li>)
        }
    </ul>
    <p className=" text-center pb-4">© 2023 Company, Inc</p>
  </footer>
  )
}
const commonStyle = "my-4";
export default Footer;
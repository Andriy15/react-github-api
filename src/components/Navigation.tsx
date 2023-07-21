import {Link} from "react-router-dom";

export default function Navigation() {
  return (
     <nav className='w-full h-[50px] bg-gray-300 flex items-center justify-between px-5 shadow-md'>
       <h1 className='font-bold'>Github Search</h1>

       <span>
         <Link to="/" className='mr-4'>Home</Link>
         <Link to="/favourites">Favourites</Link>
       </span>
     </nav>
  )
}
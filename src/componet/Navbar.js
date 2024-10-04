import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  function darkmode(){
   
  }
  return (

    <nav className={`bg-${props.mode} 'smnpm star'' h-16`} id='nav1'>
      <div id='cantainer0'>
         <div  className=" grid grid-cols-7 mt-2"id='container1' >
    <li  className=" dash text-white w-40 h-8 bg-lime-400 rounded-lg mt-2 ">Dashboard</li>
    <li  className=" hover1 text-teal-200 w-20 h-8 rounded-lg ">Home</li>
    <li  className=" hover1 text-teal-200 w-20 h-8 rounded-lg ">Team</li>
    <li  className="hover1 text-teal-200 w-20 ml-2 rounded-lg ">Projects</li>
    <li  className="hover1 text-teal-200 w-20 ml-2 rounded-lg">Reports</li>
    <a herf="#">
    <li  className="hover1 text-teal-200 w-20 ml-1 rounded-lg">About</li>
    </a>
    <li  className="hover1 text-teal-200 w-20 ml-2 rounded-lg"> Log out</li>
    <label className="switch text-lime-200 rounded-lg" >
  <input type="checkbox"  onClick={props.togglemode}/>
  <span className="slider round" ><strong>Enable Darkmode</strong> </span>
</label>
        </div>
    </div>
  </nav>
  )
}

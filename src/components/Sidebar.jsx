import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

    const[showProductMenu, setShowProductMenu] = useState(false);
    const onToggleProductMenu = () =>{
        setShowProductMenu(!showProductMenu);
    };

    return (
        <div className='sidebar'>
            <img className='logo' src='../src/assets/logo_skinsense.png'/>
            <h1>Seller Centre</h1>
            <ul>
                <li><Link to='/Order'>Order</Link></li>
                <li>
                    <span onClick={onToggleProductMenu}>Products</span>
                    {showProductMenu && (
                        <ul>
                            <li><Link to='/MyProduct'>My Product</Link></li>
                            <li><Link to='/AddProduct'>Add Product</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to='/ChatManagement'>Chat</Link></li>
                <li><Link to='/Finance'>Finance</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
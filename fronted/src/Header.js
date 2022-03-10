import React from 'react';
import  './Header.css'
import SearchIcon from '@mui/icons-material/Search';



function Header() {
    return (
        <div className="header">
       <img className="header__logo" 
       src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />   
       <div className="header_search" >
           <input className="header__searchInput" type='text'/>
           <SearchIcon className="header__searchIcon" />
           {/*logo */}
       </div>
       <div className="header__right">
           <div className="header__option" >
           <div className="header__optionLineOne">
               Hello Guest
           </div>
           <div className="header__optionLineTwo">
               Sign In
           </div>
           </div>
           <div className="header__option" >
           <div className="header__optionLineOne">
               Returns
           </div>
           <div className="header__optionLineTwo">
              & Orders
           </div>
               
           
           </div>
           <div className="header__option" >
           <div className="header__optionLineOne">
               Your
           </div>
           <div className="header__optionLineTwo">
               Prime
           </div>
           </div>
           
           </div>
       </div>
       

    

    )
}

export default Header

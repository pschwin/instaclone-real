import React from 'react';
import './Search.css';
import {} from 'reactstrap';
import * as Icon from 'react-feather';
import {SearchBarDiv, InstaCursive, FormInput} from './Search-styled';


const SearchBar = props => {
  return (
    
    <SearchBarDiv type="searchBarTypeTest">
      <div className='searchBarLeft'>
        <Icon.Instagram className='instaIcon' />
        <InstaCursive 
          src='https://fontmeme.com/images/instagram-new-logo.png'
          alt='' 
        />
      </div>
      <form>
        
        <FormInput 
          type='search'
          name='search'
          onChange={props.searchPosts}
          placeholder='Search'
          />
          
        
      </form>
      <div className='searchBarRight'>
        <Icon.Compass className='navIcons' />
        <Icon.Heart className='navIcons' />
        <Icon.User className='navIcons' />
      </div>
    </SearchBarDiv>
  )
}

export default SearchBar;

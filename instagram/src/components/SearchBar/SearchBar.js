import React from 'react';
import './Search.css';
import { Form, FormGroup, Input } from 'reactstrap';
import * as Icon from 'react-feather';
import {SearchBarDiv, InstaCursive} from './Search-styled';


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
      <Form>
        <FormGroup>
        <Input 
          type='search'
          name='search'
          onChange={props.searchPosts}
          placeholder='Search'/>
          
        </FormGroup>
      </Form>
      <div className='searchBarRight'>
        <Icon.Compass className='navIcons' />
        <Icon.Heart className='navIcons' />
        <Icon.User className='navIcons' />
      </div>
    </SearchBarDiv>
  )
}

export default SearchBar;

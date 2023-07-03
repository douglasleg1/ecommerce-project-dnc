import React from 'react'
import "./SearchBar.scss"
import searchIcon from "../../assets/search-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import hearthIcon from "../../assets/hearth-icon.svg";

const SearchBar = () => {
  return (
    <section className='searchBar'>    
        <img id="searchIcon" src={searchIcon} alt=''></img>
        <input type='text' name='searchBar' placeholder='O que você está procurando?'></input>
        <img src={profileIcon} alt=''></img>
        <img src={hearthIcon} alt=''></img>
    </section>
  )
}

export default SearchBar
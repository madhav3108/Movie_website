import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import Card from "./Card";
import Movie from "../pages/Movie";

const TopNav = ({ isScrolled }) => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    // { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movie" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchMov, setSearchMov] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  // console.log(searchQuery);

  //const handleSearch = () => {
    // // Perform search logic here based on the searchQuery
    // // For example, you can make an API call to fetch search results
    // // For now, let's just set the results to some sample data
    // // const img="client/public/WhatsApp Audio 2023-05-20 at 1.30.21 AM.mp4"
    // <a href="www.youtube.com"/>
    // const sampleResults = [
    //   { id: "thor", title: "www.youtube.com " },
    //   // { id: "thor", title: "www.youtube.com " }
    //   // { id: "avg", title: "Avenger" },
    //   // { id: 3, title: "" },
    // ];

  //   setSearchResults(sampleResults);
  // };

  const data = useSelector((state)=>{
    return state.netflix;
  })
  let arr = [];
  let obj;
  arr = data.movies;
  function handleChange(event){
    let newSearch = event.target.value;
    setSearchQuery(newSearch);
  }

  function handleClick(){
    arr.map((movie)=>{
      return(console.log(movie.name))
    })
    obj = arr.find(movie=>movie.name === searchQuery);
    console.log('iam clicked');
    setIsClick(true);
    setSearchMov(obj);
    console.log(setSearchMov);
    console.log(searchQuery);
  }

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <p style={{cursor:"pointer"}}>Movie Website</p>
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rightSide">
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              onChange={handleChange}
            />
            
      {/* <Link to={{pathname:'/search', state:{obj}}} style={{textDecoration:'none'}} onClick={handleClick}>Search</Link> */}
            <button onClick={handleClick}>Search</button>
          </div>

          <button onClick={() => signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>

      {/* {searchResults.length > 0 && (
        <div className="searchResults">
          {searchResults.map((result) => (
            <p key={result.id}> </p>
          ))}
        </div>
      )} */}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  p {
    color: red;
    font-size: 30px;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.3s ease-in;
    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 5rem;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 2rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button {
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 50%;
    }
    &:focus {
      outline: none;
    }
    svg {
      color: white;
      font-size: 2rem;
    }
  }

  /* Add any additional styles you need for the search bar and results here */
  .searchContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #ff0000;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  }

  .searchResults {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 300px;
    overflow-y: auto;
    z-index: 10;
    padding: 0.5rem;
    
    /* Style each search result item */
    div {
      padding: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;

export default TopNav;

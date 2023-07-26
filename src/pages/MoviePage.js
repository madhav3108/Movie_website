import React from 'react';
import img from '../assets/a.jpg';
import TopNav from '../components/TopNav';
import styled from 'styled-components';

const MoviePage = () => {
  return (
    <>
      <TopNav />
      <MovieContainer>
        <img src={img} alt="hi" />
      </MovieContainer>
    </>
  );
}

export default MoviePage;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* You can adjust the height to your preference */
  
  img {
    display:container;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    }
`;

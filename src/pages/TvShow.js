import React from 'react'
import image from '../assets/4058438-untitled-5.jpg'
import TopNav from '../components/TopNav'
import styled from "styled-components";

const TvShow = () => {
  return (
    <>
    <TopNav/>
    <img src={image} class="pimg" alt="hi" />
    </>
  )
}

export default TvShow


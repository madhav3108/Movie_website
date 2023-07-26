import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end)=>{
            // console.log(movies.slice(0, 10));
        return movies.slice(start, end)
    }

  return (
   <SliderWrapper>
      <MovieSlider data={getMoviesBetween(0,10)} title="Only On Movie Website" />
      <MovieSlider data={getMoviesBetween(10,20)} title="Trending" />
      <MovieSlider data={getMoviesBetween(20,30)} title="Popular" />
      <MovieSlider data={getMoviesBetween(30,40)} title="Movie" />
      <MovieSlider data={getMoviesBetween(40,50)} title="Drama" />
      <MovieSlider data={getMoviesBetween(50,60)} title="Released" />
      <MovieSlider data={getMoviesBetween(60,70)} title="Action Packed" />
   </SliderWrapper>
  )
}
const SliderWrapper = styled.div`

`

export default SliderContainer
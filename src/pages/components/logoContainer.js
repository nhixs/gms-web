import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoContainer = (props) => {
  const { image, scale, space } = props
  return (
    <ImageContainer>
      <Link to="/home"><img src={image} style={{ maxHeight: scale, maxWidth: scale, resize: 'contain', margin: space }} alt="logo-koperasi" /></Link>
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LogoContainer
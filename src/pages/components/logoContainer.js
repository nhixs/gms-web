import React from 'react'
import styled from 'styled-components'

const LogoContainer = (props) => {
  const { image, scale, space } = props
  return (
    <ImageContainer>
      <img src={image} style={{ maxHeight: scale, maxWidth: scale, resize: 'contain', margin: space }} alt="logo-koperasi" />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LogoContainer
import React from 'react'
import PropTypes from 'prop-types'

export const BASE_URL = 'https://d4bpl0axl8s2e.cloudfront.net'

const Image = (props) => {
  const imgProps = { ...props }
  imgProps.src = `${BASE_URL}/${imgProps.src}`

  return <img {...imgProps} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image

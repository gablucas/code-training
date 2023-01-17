import React from 'react'

const Head = ({ title, description }) => {
  document.title = `${title} | Code Training`
  document.querySelector('meta[name="description"]').setAttribute('content', description || '')

  return <></>
}

export default Head
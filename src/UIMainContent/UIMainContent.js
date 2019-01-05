import React from 'react'
import { styledComponentProp } from 'props'

function UIMainContent({ classes }) {
  return <section id="main-content" className={classes.content}>
    <div className={classes.drawerHeader} />
  </section>
}

UIMainContent.propTypes = {
  ...styledComponentProp,
}

UIMainContent.defaultProps = {}

export default UIMainContent

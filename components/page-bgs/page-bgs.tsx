import React from 'react'

const PageBGs = ({ dataState = 'home' }) => {
  return (
    <ul className="page-bg full-screen fixed" data-state={dataState}>
      <li>
        <div className="grad-bg full-screen absolute-t-l home"></div>
      </li>
      <li>
        <div className="grad-bg full-screen absolute-t-l graphics"></div>
      </li>
      <li>
        <div className="grad-bg full-screen absolute-t-l film"></div>
      </li>
      <li>
        <div className="grad-bg full-screen absolute-t-l about"></div>
      </li>
    </ul>
  )
}

export default PageBGs

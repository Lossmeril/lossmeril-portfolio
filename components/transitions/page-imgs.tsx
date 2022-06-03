import React from 'react'

const PageIMGs = ({ dataState = 'home' }) => {
  return (
    <ul className="page-img full-screen fixed" data-state={dataState}>
      <li>
        <div className="bg-img full-screen absolute-t-l">
          <img className="character" src="/img/bgs/chars/děda.png" />
          <img
            className="background"
            src="/img/bgs/backgrounds/smoke-green.png"
          />
        </div>
      </li>
      <li>
        <div className="bg-img full-screen absolute-t-l">
          <img className="character" src="/img/bgs/chars/děda.png" />
          <img
            className="background"
            src="/img/bgs/backgrounds/smoke-green.png"
          />
        </div>
      </li>
      <li>
        <div className="bg-img full-screen absolute-t-l">
          <img className="character" src="/img/bgs/chars/děda.png" />
          <img
            className="background"
            src="/img/bgs/backgrounds/smoke-green.png"
          />
        </div>
      </li>
      <li>
        <div className="bg-img full-screen absolute-t-l">
          <img className="character" src="/img/bgs/chars/děda.png" />
          <img
            className="background"
            src="/img/bgs/backgrounds/smoke-green.png"
          />
        </div>
      </li>
    </ul>
  )
}

export default PageIMGs

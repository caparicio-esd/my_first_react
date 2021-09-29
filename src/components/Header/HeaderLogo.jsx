import React from 'react'
import logo from './../../assets/img/header_brand_logo.png'

const HeaderLogo = () => {
    const projectName = "acm.chat"

    return (
        <div className="header_brand">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="slogan">
                {projectName}
            </div>
        </div>
    )
}

export default HeaderLogo

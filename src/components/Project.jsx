import React from 'react'
const Project = (props) => {
    return (
        <div className="container__cards__project">
            <div className="container__img__project">
                <img className='img__project' src={props.img_project} alt="" />
            </div>
            <div className="container__content__project">
                <h3 className='title__project'>{props.title_project}</h3>
                <p className='content__project'>{props.description_project}</p>
                <p className='content__project'>{props.description_second}</p>
                <p className='content__project'></p>
                <div className="container__buttons__project">
                    <a target={'_blank'} className='button__project' href={props.link_site}>Ver sitio</a>
                    {/* <a className='button__project' href="">Ver código</a> */}
                </div>
            </div>
        </div>
    )
}

export default Project
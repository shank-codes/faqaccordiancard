import {  useState } from 'react';

const Accordion = ({title, body}) => {
    const [isActive, setIsActive] = useState(false)

    return(
      <div className='accordion-item' onClick={() => setIsActive(!isActive)}>
        <div className='accordion-title' >
          <h2 className={isActive ? 'expanded' : ''}>{title}</h2>
          <img className={isActive ? 'arrow-up' : 'arrow'} alt="arrow" src="./images/icon-arrow-down.svg" />
        </div>
        {isActive && <p className='accordion-body' >
          {body}
        </p>}
        <hr />
      </div>
    )
}

export default Accordion
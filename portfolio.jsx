import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/6523230.jpg'
import IMG2 from '../../assets/6523230.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p2.jpg'
import IMG5 from '../../assets/p4.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
      
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG3} alt="" />
      </div>
            <h3>RevNow</h3>
            <h4>A complaint register for NITH students that makes their life better by making complaints more and more transparent</h4>
            <div className='portfolio_item-cta'>
            <a href="https://github.com/Dimpleh21/solutionists-project" className='btn'>Github</a>
            
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>CabZEE</h3>
            <h4>A taxi-booking platform for NITH students that makes their ride hassle free and much more convenient.</h4>
            <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
           
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>This is the Figma design for my project CabZEE.</h3>
            <div className='portfolio_item-cta'>
            
            <a href="https://www.figma.com/file/rdQdv7f4deVlAh7lChG7wF/Untitled?type=design&node-id=0-1&mode=design&t=cIAzG9yF2kUQPOAV-0" className='btn btn-primary' target='_blank'>Prototype-1</a>
            <a href="https://www.figma.com/file/Lp0COXGP6QZzu97tuhYoKN/Untitled?type=design&node-id=0-1&mode=design&t=L1FXEjPVaEFxmhDW-0" className='btn ' target='_blank'>Prototype-2</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
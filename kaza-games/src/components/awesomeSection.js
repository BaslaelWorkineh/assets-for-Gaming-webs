import React from 'react'
import './awesomeSection.css'
import img from '../imgs/landing-home-img-1.jpg'



function AwesomeSection() {
    return (
        <>
            <div className='awesomeSection'>

                <div className='sideText'>
                    <div className='mainsideText'>
                        <h1>Fantastic selection of multiuse ReadyMade Inner page Layouts</h1>
                        <p>Artorias comes with a huge collection of practical and carefully designed layouts for presenting your team, displaying FAQs, contact forms and more.</p>
                        <button class="button" data-text="Awesome">
                            <span class="actual-text">&nbsp;View_More&nbsp;</span>
                            <span aria-hidden="true" class="hover-text">&nbsp;View_More&nbsp;</span>
                        </button>
                    </div>
                    <div className='tag'>
                        <h3>Templates</h3>
                    </div>
                </div>

                <img className='imgone' src={img}/>
                <img className='imgtwo'src={img}/>
                <img className='imgthree'src={img}/>
                <img className='imgfour'src={img}/>
                <img className='imgfive'src={img}/>

            </div>
        </>

    )
}

export default AwesomeSection

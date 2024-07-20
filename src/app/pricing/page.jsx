import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <NavigationBar/>

        <div className="h-screen">
            <div className=''>
                <div className="text-3xl font-semibold">
                    <p>Pricing</p>
                </div>
                <div>
                    <p>We offer a range of car detailing packages designed to meet your specific needs. At Maintainer, we believe in the transformative power of a clean car.</p>
                </div>
            </div>
            <div>

            </div>
        </div>


        <Footer/>
    </div>
  )
}

export default page
import React from 'react'
import WorkFromAnywhere from '../components/WorkFromAnywhere'
import Videoreview from '../components/Videoreview'
import Mediaproduction from '../components/Mediaproduction'
import Createandcompare from '../components/Createandcompare'
import Empowercontent from '../components/Empowercontent'
import Mediafiles from '../components/Mediafiles'
import Understandtheimportance from '../components/Understandtheimportance'
import Getstartfast from '../components/Getstartfast'
import Hero from '../components/Hero'
import Boardwithyourprojects from '../components/Boardwithyourprojects'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Createandcompare/>
        <Empowercontent/>
        <Videoreview/>
        <Mediaproduction/>
        <Boardwithyourprojects/>
        <Mediafiles/>
        <WorkFromAnywhere/>
        <Understandtheimportance/>
        <Getstartfast/>
    </div>
  )
}

export default Home
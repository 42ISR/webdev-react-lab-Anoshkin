import { useState } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Courses from "./components/CoureseList/Courses"
import Reviews from "./components/TestimonialList/Reviews"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Courses />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App

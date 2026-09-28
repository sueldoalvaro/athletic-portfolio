import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import VideoSection from './sections/VideoSection'
import PictureSection from './sections/PictureSection'
import ClubHistorySection from './sections/ClubHistorySection'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main id="home" className="flex-1 scroll-mt-20">
        <HeroSection />
        <VideoSection />
        <ClubHistorySection />
        <PictureSection />
      </main>
      <Footer />
    </>
  )
}

export default App

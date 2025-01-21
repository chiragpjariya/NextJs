import Linking from "../components/Linking"

function About() {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">About page</h1>
        <p className="text-center">This is the about page</p>
        <Linking linking="/" Link="Home" />
    </div>
  )
}

export default About
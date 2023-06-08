import Image from 'next/image'

export default function Home() {
  return (
    <>
<div>
  <h3 className="flex px-10 py-10">Profile</h3>
</div>
<div className="container flex justify-around">
  <div className="team-profile">
    <img src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" />
    <h3>Alexa Kardi</h3>
    <p>Founder and CEO</p>
  </div>
  <div className="team-profile">
    <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" />
    <h3>Tavell Monroe</h3>
    <p>Web Developer</p>
  </div>
  <div className="team-profile">
    <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" />
    <h3>Adale Smith</h3>
    <p>Marketing Specialist</p>
  </div>
  <div className="team-profile">
    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300" className="team-img" />
    <h3>Thomas Mason</h3>
    <p>UX Designer</p>
  </div>
</div>
</>
  )
}
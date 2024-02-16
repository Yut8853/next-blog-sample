import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../public/images/index-hero.jpg';
import profileImage from '../public/images/profile.jpg';

const Index = () => {
  return (
    <>
      <div className='hero'>
        <Image src={heroImage} alt="hero" />
        <div className='textContainer'>
          <h1>Hi! JunkBranding</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className='container'>
          <div className='profile'>
            <div>
              <h2>JavaScriptNerd</h2>
              <p>LoremIpsumissimplydummytextofth</p>
            </div>
            <div>
              <Image src={profileImage} alt="hero" />
            </div>
          </div>
          <div className='skills'>
            <h2>Skills</h2>
              <div className='skillsContainer'>
                <div>
                  <img src="/images/javascript.svg"alt="javascript"/><span>JavaScript/10years</span>
                </div>
                <div>
                  <img src="/images/react.svg"alt="react"/><span>React/5years</span>
                </div>
                <div>
                  <img src="/images/gatsby.svg"alt="gatsby"/><span>Gatsby/3years</span>
                </div>
                <div>
                  <img src="/images/next.svg"alt="next"/><span>Next.JS/3years</span>
                </div>
              </div>
          </div>
        </div> 
        <div className='ctaButton'>
          <Link href="/contact">MakeItHappen!</Link>
        </div>
    
    </>
  )
}

export default Index;
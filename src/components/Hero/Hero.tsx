import { animated, useSpring } from '@react-spring/web';
import { Button } from '@/components';
import './hero.css';
import { Me } from '@static/images';
const Hero = () => {
  const isMobile = window.innerWidth < 800;
  let firstBoot;
  let secondBoot;
  !isMobile &&
    ((firstBoot = useSpring({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 1900,
      config: {
        tension: 210,
        friction: 30,
      },
    })),
    (secondBoot = useSpring({
      from: {
        opacity: 0,
        y: 30,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 2200,
      config: {
        tension: 280,
        friction: 60,
      },
    })));
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="text-box">
          <p className="hello-world">Hello, World!</p>
          <animated.h1 style={firstBoot} className="title">
            I'm <br className="break" /> <span className="name">Utkarsh Raj</span>
          </animated.h1>
          <animated.div style={secondBoot}>
            <h2 className="sub-title">Innovative problem solver, driven by tech's potential to transform society.</h2>
            <p className="intro">
              I am a Full Stack Developer, always conjuring new and innovative solutions with the power of code.
              Technology is my passion, and I approach every project with enthusiasm and a thirst for knowledge, eager
              to unlock the potential of every byte. <span className="status"></span>
            </p>
            <Button title="Explore More" link="#projects" />
          </animated.div>
        </div>
        <animated.div style={firstBoot} className="image-box">
          <div className="wrapper">
            <div className="image-wrapper">
              <div className="background"></div>
              <img src={Me} alt="Utkarsh Raj" className="profile" />
            </div>
            <div className="tag-box">
              <p className="tag">
                It's me, Utkarsh Raj! <span className="wave">👋</span>{' '}
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;

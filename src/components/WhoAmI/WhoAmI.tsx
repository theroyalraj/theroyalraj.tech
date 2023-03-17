import { useInView, animated } from '@react-spring/web';
import { Knowledge } from '@/components';
import './whoami.css';
const WhoAmI = () => {
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 50,
          opacity: 0,
        },
        to: {
          y: -20,
          opacity: 1,
        },
        config: {
          duration: 500,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -30% 0px',
      },
    ));
  return (
    <section id="about" className="whoami">
      <animated.div ref={ref} style={springs} className="whoami-box">
        <div className="text-box">
          <h3 className="title">About</h3>
          <p className="text">
            My name is Utkarsh Raj. I'm a software developer based in Bengaluru with domain expertise in <span className="bold">Conversational AI, Sales Enablement, and Revenue Intelligence</span>. I have a proven track record of designing, developing, and maintaining complex software applications in a competitive startup environment. My expertise in both front-end and back-end development has allowed me to deliver robust solutions that meet clients' specific requirements.
          </p>

          <p className="text">
            With proficiency in <span className="bold">Java, Spring Boot, PostgreSQL, Elastic Search, AWS, NodeJs,</span> and have the technical skills necessary to take on any software development challenge. I am always seeking to expand my knowledge and stay up-to-date with the latest technologies and development practices to ensure the highest quality results for my clients.
          </p>

          <p className="text">
            Do you want a software developer who is more than just a <span className="italic"><span className="bold">code monkey</span></span>?{' '} Look no further! I'm a driven and passionate developer. I'm experienced in a range of programming languages and tools, and I thrive in fast-paced and dynamic environments. I'm a team player who values communication and collaboration, and I'm always eager to learn and stay up-to-date with the latest trends and technologies. <span className="italic">Let's work together to bring innovative ideas to life and make an impact in the tech industry!</span>
          </p>
        </div>
        <Knowledge />
      </animated.div>
    </section>
  );
};

export default WhoAmI;

import headshot from '../assets/headshot.png'
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img className="headshot" src={headshot} />
      <div className="about-info">
        <p>Hello! I’m Denzel Turambi, and I am currently a software development student at Turing School of Software and Design.</p>
        <p>
          I’ve always been curious about a lot of things (possibly too many things), so it was really hard for me to figure out what I really wanted to do after high school. I briefly went to college for business, but then took a gap year, traveled to Singapore and Indonesia, and worked as a subcontractor for a little while. In this time, I learned that I really enjoyed designing/problem solving and creating things. From there I decided to go to school for Industrial/Product Design, but that was until my brother told me about Turing.
        </p>

        <p>
          I decided to pursue a career in software development because it is the perfect combination of designing, creating, and problem-solving. So far, I have learned about JavaScript, css, and HTML! I've also learned about testing with mocha/chai, and React. In the near future, I hope to get my Turing certificate and land a job as a software developer.
        </p>

        <p>Outside of work and education, I really enjoy sketching, model-making, cooking, video games, and of course, spending time with friends and family.
        </p>
      </div>
    </div>
  )
}

export default About;
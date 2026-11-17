const skills = ["HTML & CSS", "JavaScript", "React", "Python", "C#"];

function Main() {
  return (
    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Based in Almaty, Kazakhstan
          </p>
          <h1>
            Hello, I&apos;m <span>Abai</span>
          </h1>
          <p className="hero-subtitle">IT Student &amp; Aspiring Developer</p>
          <p className="hero-intro">
            I&apos;m an IT student passionate about programming, web development,
            and technology. I enjoy learning new skills and building creative
            projects.
          </p>
          <a className="button" href="#contact">
            Contact Me <span aria-hidden="true">↗</span>
          </a>
        </div>

        <aside className="profile-card" aria-label="Personal information">
          <div className="profile-mark" aria-hidden="true">
            A
          </div>
          <p className="card-label">A little about me</p>
          <h2>Curious by nature. Building for the future.</h2>
          <div className="profile-details">
            <div>
              <span>Age</span>
              <strong>18</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Almaty, Kazakhstan</strong>
            </div>
            <div>
              <span>Profession</span>
              <strong>IT Student</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="skills-section" id="skills">
        <div className="container skills-content">
          <div>
            <p className="section-kicker">What I work with</p>
            <h2>Skills &amp; technologies</h2>
          </div>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section container" id="about">
        <p className="section-kicker">A bit more</p>
        <h2>Always learning, always creating.</h2>
        <p>
          I&apos;m exploring the world of software development one project at a
          time, with a special interest in building useful and thoughtful web
          experiences.
        </p>
      </section>
    </main>
  );
}

export default Main;

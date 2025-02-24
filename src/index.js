import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="jonas.jpeg"/>
  )
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Potuguese sun at the beach.</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill info="HTML + CSS" bg="blue" />
      <Skill info="JavaScript" bg="yellow" />
      <Skill info="Web Design" bg="lightgreen" />
      <Skill info="Git and Github" bg="red" />
      <Skill info="React" bg="lightblue" />
      <Skill info="Svelte" bg="red" /> */}
      {skills.map((skillArr) => (
        <Skill skill={skillArr.skill} color={skillArr.color} level={skillArr.level} />
      ))}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

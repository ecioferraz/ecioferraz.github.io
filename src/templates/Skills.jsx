import React from 'react';
import { HardSkillsIconList, SkillsList, SoftSkillsIconList } from '../components';
import { HARD_SKILLS } from '../utils/skills';
import '../styles/Skills.css';

export default function Skills () {
  return (
    <section className='skills' id="skills">
      <h1 className="skills-title">Habilidades</h1>
      <div className="skills-lists">
        <div className="hard-skills">
          <h3>Hard Skills</h3>
          <div className="inner-skills">
            <HardSkillsIconList second={true} />
            <SkillsList list={ HARD_SKILLS.slice(0, 7) } />
            <HardSkillsIconList first={true} />
            <SkillsList list={ HARD_SKILLS.slice(7) } />
          </div>
        </div>
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="inner-skills">
            <SoftSkillsIconList />
            <ul className="skill">
              <li>Colaboração</li>
              <li>Teamwork</li>
              <li>Organização</li>
              <li>Clean code</li>
              <li>Empatia</li>
              <li>Assertividade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

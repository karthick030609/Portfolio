
import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            skillName: 'C Language',
            skillPercentage: '70%',
        },
        {
            skillName: 'Core Java',
            skillPercentage: '30%',
        },
        {
            skillName: 'Python',
            skillPercentage: '40%',
        },
        {
            skillName: 'HTML & CSS',
            skillPercentage: '80%',
        },
        {
            skillName: 'JavaScript',
            skillPercentage: '20%',
        },
        {
            skillName: 'React JS',
            skillPercentage: '50%',
        },
        {
            skillName: 'UI & UX',
            skillPercentage: '40%',
        },
        {
            skillName: 'GitUp',
            skillPercentage: '60%',
        },
    ];

    return (
        <>
        <div id='Skills'>
            <div className='about'>
                <h1><span style={{color:'violet'}}>My </span>Skills</h1>
            </div>
            <div className='skillContent'>
                <h2 style={{ paddingLeft: '14%' }}>I Work Hard to Improve My</h2>
                <h2 className='h2' style={{ paddingLeft: '21%' }}>Skills Regularly</h2>
            </div>
            <div className='mainskill'>
                <div className='skillbox'>
                    {skills.map((skill, index) => {
                        return (
                            <div key={index}>
                                <div className='skill'>
                                    <p>{skill.skillName}</p>
                                    <hr style={{ width: skill.skillPercentage }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='achievements'>
                <div className="achieve">
                  <h1>1+</h1>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="achieve">
                  <h1>2+</h1>
                  <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="achieve">
                  <h1>0+</h1>
                  <p>HAPPY CLIENTS</p>
                </div>


            </div>
            </div>
        </>
    );
};

export default Skills;

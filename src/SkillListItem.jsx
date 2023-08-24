import React from 'react';
import './SkillListItem.css';


function SkillListItem({skill}) {
    return (
        <li className="SkillListItem">
            <div>{skill.name}</div>
            <div className="level">LEVEL {skill.level}</div>
        </li>
    )
}


export default SkillListItem
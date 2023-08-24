import React from 'react';
import SkillListItem from './SkillListItem';



function SkillList({skills}) {
    
    return (
        <ul className='padding-0'>
           {skills.map((skills, idx) => (
            <SkillListItem skill={skills} index={idx} key={idx} />
           ))}
        </ul>
    )
}
    
        

export default SkillList    
import { useState } from 'react';
import './NewSkillForm.css';



function NewSkillForm({ addSkill }) {
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 1
    })

    function handleSubmit(evt) {
        evt.preventDefault()
        addSkill(newSkill)
        setNewSkill({ name: "", level: 1})
    }

    function handleChange(evt) {
        setNewSkill({ ...newSkill, [evt.target.name]: evt.target.value })
    }

    return (
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label>Skill</label>
            <input
                className="NewSkillForm"
                name="name"
                value={newSkill.name}
                onChange={handleChange}
            />
            <label>Level</label>
            <select
                className="NewSkillForm"
                name="level"
                value={newSkill.level}
                onChange={handleChange}
             >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </select>   
                <button type="submit">ADD SKILL</button>     
        </form>
    )

}


export default NewSkillForm
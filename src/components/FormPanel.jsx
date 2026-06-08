import { useCV } from "../context/CVContext";
import { ExpirienceInput } from './ExperienceInput';
import { EducationInput } from './EducationInput';

export function FormPanel(){
    const {state, dispatch} = useCV();

    const handlePersonalChange = (key, value) => {
        dispatch({ 
            type: 'UPDATE_PERSONAL', 
            payload: { key: 'fullName', value: e.target.value } 
        });
    };

    return (
        <div>
            <h2>Заполните данные</h2>
            {/* Личная информация */}
        <section className="form-section">
            <h3>Личная информация</h3>
            <div className="form-group">
                <label>ФИО</label>
                <input 
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    value={state.personalInfo.fullName}
                    onChange={(e)=>handlePersonalChange('fullName', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Должность</label>
                <input 
                    type="text"
                    placeholder="Frontend-разработчик"
                    value={state.personalInfo.position}
                    onChange={(e)=>handlePersonalChange('position', e.target.value)}
                />
                </div>
            <div className="form-group">
                <label>Email</label>
                <input 
                    type="email"
                    placeholder="example@email.com"
                    value={state.personalInfo.email}
                    onChange={(e)=>handlePersonalChange('email', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Телефон</label>
                <input 
                    type="tel"
                    placeholder="+7 (999) 999 99 99"
                    value={state.personalInfo.phone}
                    onChange={(e)=>handlePersonalChange('phone', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>О себе</label>
                <textarea
                    placeholder="Кратко опишите свои цели и сильные стороны"
                    value={state.personalInfo.about}
                    onChange={(e)=>handlePersonalChange('about', e.target.value)}
                    rows={4}
                />
            </div>
        </section>
        {/* Опыт работы */}
        <section className="form-section">
            <h3>Опыт работы</h3>
            {state.experience.map((exp) => (
                <ExpirienceInput
                    key={exp.id}
                    expirience={exp}
                    dispatch={dispatch}
                />
            ))}
            {/* кнопка добавления места работы */}
            <button className="btn-add" onClick={() => dispatch({type: 'ADD_EXPERIENCE'})}>
                + Добавить место работы
            </button>
        </section>
        <section className="form-section">
            <h3>Образование</h3>
            {state.education.map((edu) => (
                <EducationInput
                    key={edu.id}
                    education={edu}
                    dispatch={dispatch}
                />
            ))}
            {/* кнопка добавления образования */}
            <button className="btn-add" onClick={() => dispatch({type: 'ADD_EDUCATION'})}>
                + Добавить образования
            </button>
        </section>
        <section className="form-section">
            <h3>Навыки</h3>
            <div className="form-group">
                <textarea
                    placeholder="React, JavaScript, HTML, CSS, Git..."
                    value={state.skills}
                    onChange={(e)=> dispatch({type: 'UPDATE_SKILLS', payload: e.target.value})}
                    rows={3}
                />
            </div>
        </section>
    </div>
    );
 }


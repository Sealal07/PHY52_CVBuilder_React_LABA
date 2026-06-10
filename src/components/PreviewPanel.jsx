import { useRef } from 'react';
import { useCV } from '../context/CVContext';


export function PreviewPanel(){
    const {state, dispatch} = useCV();

    const previeRef = useRef(null);

    const { personalInfo, experience, education, skills, theme} = state;

    const handlePrint = () => {
        const el = previeRef.current;
        if (el) {
            el.classList.add('preview-to-print');
            window.print();
            el.classList.remove('preview-to-print');
        }
    };

        const themeStyle = {
            classic: {
                container: {
                    background: ' #fffbf0',
                    border: '2px solid #722f37',
                    padding: '32px',
                    color: '#4a1e26',
                    fontFamily: 'Georgia, serif'
                },
                header: {
                    borderBottom: '3px double #722f37',
                    paddingBottom: '16px',
                    marginBottom: '24px'
                },
                name: {
                    color: '#722f37',
                    fontSize: '32px',
                    margin: '0 0 8px 0',
                },
                position: {
                    color: '#8b5a3c',
                    fontSize: '18px',
                    fontStyle: 'italic',
                    margin: '0 0 16px 0',
                },
                contacts: {
                    fontSize: '14px',
                    color: '#6b4423',
                },
                sectionTitle: {
                    color: '#722f37',
                    borderBottom: '2px solid #e8d5b7',
                    paddingBottom: '6px',
                    marginBottom: '12px',
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                },
                item: {
                    marginBottom: '16px',
                    paddingBottom: '12px',
                    borderBottom: '1px dashed #e8d5b7',
                },
                itemTitle: {
                    color: '#4a1e26',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    margin: '0 0 4px 0',
                },
                itemSubtitle: {
                    color: '#8b5a3c',
                    fontStyle: 'italic',
                    margin: '0 0 4px 0',
                    fontSize: '14px',
                },
                itemYears: {
                    color: '#a0785a',
                    fontSize: '13px',
                    margin: '0 0 8px 0',
                },
                skillsList: {
                    display: 'flex',
                    flexWrap: 'wrap', 
                    gap: '8px',
                },
                slillsTag: {
                    background: '#fdf6c5',
                    border: '1px solid #722f37',
                    color: '#4a1e26',
                    padding: '4px 12px',
                    fontSize: '13px',
                },
            },
            modern: {
                container: {
                    background: 'linear-gradient(135deg, #fffbf0 0%, #f5e6c8 100%',
                    border: 'none',
                    padding: '32px',
                    color: '#3d2817',
                    fontFamily: 'Arial, sans-serif',
                    boxShadow: '0 8px 24px rgba(114, 47, 55, 0.15)',
                    borderRadius: '16px',
                },
                
                header: {
                    background: '#722f37',
                    color: '#fdf6c5',
                    padding: '20px',
                    marginBottom: '24px',
                    borderRadius: '20px',
                },
                name: {
                    color: '#fdf6c5',
                    fontSize: '32px',
                    margin: '0 0 8px 0',
                    fontWeight: 'bold',
                },
                position: {
                    color: '#f5e6c8',
                    fontSize: '18px',
                    margin: '0 0 12px 0',
                },
                contacts: {
                    fontSize: '14px',
                    color: '#fdf6c5',
                    opacity: 0.9,
                },
                sectionTitle: {
                    color: '#722f37',
                    background: '#fdf6c5',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    marginBottom: '18px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    display: 'inline-block',
                },
                item: {
                    background: '#fffbf0',
                    padding: '14px',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    borderLeft: '4px solid #722f37',
                },
                itemTitle: {
                    color: '#3d2817',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    margin: '0 0 4px 0',
                },
                itemSubtitle: {
                    color: '#722f37',
                    fontWeight: '600',
                    margin: '0 0 4px 0',
                    fontSize: '14px',
                },
                itemYears: {
                    color: '#a0785a',
                    fontSize: '13px',
                    margin: '0 0 8px 0',
                },
                skillsList: {
                    display: 'flex',
                    flexWrap: 'wrap', 
                    gap: '8px',
                },
                slillsTag: {
                    background: '#722f37',
                    borderRadius: '20px',
                    color: '#fdf6c5',
                    padding: '6px 12px',
                    fontSize: '13px',
                    fontWeight: '600',
                },
            },
         };
         const s = themeStyle[theme];

         const skillArray = skills.split(',').map((s)=> s.trim()).filter((s) => s.length > 0);
        return (

         <div className='preview-panel'>
            {/* свитч темы */}
            <div className='preview-controls'>
                <div className='preview-switcher'>
                    <span>Тема: </span>
                    <button
                        className={theme === 'classic' ? 'active' : ''}
                        onClick={()=> dispatch({type: 'SET_THEME', payload: 'classic'})}
                    >
                        Классика
                    </button>
                    <button
                        className={theme === 'modern' ? 'active' : ''}
                        onClick={()=> dispatch({type: 'SET_THEME', payload: 'modern'})}
                    >
                        Модерн
                    </button>
                </div>
                <button className='btn-print' onClick={handlePrint}>
                    🖨 Распечатать / PDF
                </button>
            </div>

            {/* ПРЕВЬЮ */}
            <div ref={previeRef} style={s.container}>
                <div style={s.header}>
                    <h2 style={s.name}>
                        {personalInfo.fullName ? personalInfo.fullName : 'Имя не указано'}
                    </h2>
                    {personalInfo.position && (
                        <p style={s.position}>{personalInfo.position}</p>
                    )}
                    <div style={s.contacts}>
                        {personalInfo.email && <span>📧{personalInfo.email}</span>}
                        {personalInfo.email && personalInfo.phone && <span></span>}
                        {personalInfo.phone && <span>☎{personalInfo.phone}</span>}
                    </div>
                    {personalInfo.about && (
                        <section style={{ marginBottom: '24px'}}>
                            <h3 style={s.sectionTitle}>О себе</h3>
                            <p style={{ lineHeight: '1.6' }}>{personalInfo.about}</p>
                        </section>
                    )}
                    {/* ОПЫТ РАБОТЫ */}
                    {experience.some((e)=> e.company || e.role) && (
                        <section style={{marginBottom: '24px'}}>
                            <h3 style={s.sectionTitle}>Опыт работы</h3>
                            {experience.filter((e)=>e.company || e.role).map((exp)=> (
                                <div key={exp.id} style={s.item}>
                                    <h4 style={s.itemTitle}>{exp.company || 'Компания не указана'}</h4>
                                    <p style={s.itemSubtitle}>{exp.role}</p>
                                    {exp.years && <p style={s.itemYears}>{exp.years}</p>}
                                    {exp.description && <p>{exp.description}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                    {/* ОБРАЗОВАНИЕ */}
                    {education.some((e)=> e.institution || e.degree) && (
                        <section style={{marginBottom: '24px'}}>
                            <h3 style={s.sectionTitle}>Образование</h3>
                            {education.filter((e)=>e.institution || e.degree).map((edu)=> (
                                <div key={edu.id} style={s.item}>
                                    <h4 style={s.itemTitle}>{edu.institution || 'Учебное заведение'}</h4>
                                    <p style={s.itemSubtitle}>{edu.degree}</p>
                                    {edu.years && <p style={s.itemYears}>{edu.years}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                    {/* НАВЫКИ */}
                    {skillArray.length > 0 && (
                        <section>
                            <h3 style={s.sectionTitle}>Навыки</h3>
                            <div style={s.skillsList}>
                                {skillArray.map((skill, idx) => (
                                    <span key={idx} style={s.skillTag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
         </div>
         
     );
}
 

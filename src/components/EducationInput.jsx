
export function EducationInput({ education, dispatch }) {

    const handleChange = (field, value) => {
        dispatch({
            type: 'UPDATE_EDUCATION',
            payload: {
                id: education.id,
                field,
                value,
            },
        });
    };
    return (
        <div className="edu-item">
            <div className="form-group">
                <label>Учебное заведение</label>
                <input 
                    type="text"
                    placeholder="МГУ им. Ломоносова'"
                    value={education.institution}
                    onChange={(e)=>handleChange('institution', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Степень / Специальность</label>
                <input 
                    type="text"
                    placeholder="Бакалавр, Информатика"
                    value={education.degree}
                    onChange={(e)=>handleChange('degree', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Годы обучения</label>
                <input 
                    type="text"
                    placeholder="2018-2024"
                    value={education.years}
                    onChange={(e)=>handleChange('years', e.target.value)}
                />
            </div>
            
            <button 
                className="btn-remove"
                onClick={()=>dispatch({type: 'REMOVE_EDUCATION', payload: education.id})}
            
            >
                &times; Удалить
            </button>
        
        </div>
);
}
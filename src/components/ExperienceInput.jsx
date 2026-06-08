export function ExpirienceInput({ expirience, dispatch }) {

    const handleChange = (field, value) => {
        dispatch({
            type: 'UPDATE_EXPERIENCE',
            payload: {
                id: expirience.id,
                field,
                value,
            },
        });
    };
    return (
        <div className="exp-item">
            <div className="form-group">
                <label>Компания</label>
                <input 
                    type="text"
                    placeholder="АНО ДПО 'Академия ТОП'"
                    value={expirience.company}
                    onChange={(e)=>handleChange('company', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Должность</label>
                <input 
                    type="text"
                    placeholder="Разработчик"
                    value={expirience.role}
                    onChange={(e)=>handleChange('role', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Период работы</label>
                <input 
                    type="text"
                    placeholder="2022-2024"
                    value={expirience.years}
                    onChange={(e)=>handleChange('years', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Обязанности и достижения</label>
                <textarea 
                    placeholder="Опишите ваши задачи"
                    value={expirience.description}
                    onChange={(e)=>handleChange('description', e.target.value)}
                    rows={3}
                />
            </div>
            <button 
                className="btn-remove"
                onClick={()=>dispatch({type: 'REMOVE_EXPERIENCE', payload: expirience.id})}
            
            >
                &times; Удалить
            </button>
        
        </div>
);
}
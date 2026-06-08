import { createContext, useContext, useReducer, useEffect } from "react";

const CVContext = createContext();

const loadFormStorage = () => {
    try{
        const saved = localStorage.getItem('cv_data');
        if (saved) return JSON.parse(saved);
    }
    catch (e){
        console.error('Ошибка чтения localStorage', e);

    }
    return {
        personalInfo: {fullName: '', email: '', phone: '', position: ''},
        experience: [{ id: 1, company: '', role: '', years: '', description: '' }],
        education: [{ id: 1, institution: '', dagree: '', years: '' }],
        skills: '',
        theme: 'classic'
    };
};
const initialState = loadFormStorage();


function cvReducer(state, action) {
    switch (action.type){

        case 'UPDATE_PERSONAL':
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    [action.payload.key]: action.payload.value,
                },
            };
        case 'ADD_EXPERIENCE':
            return {
                ...state,
                experience: [
                    ...state.experience,
                    {
                        id: Date.now(), 
                        company: '', 
                        role: '', 
                        years: '' ,
                        description: '',
                    },
                ],
            };
        case 'UPDATE_EXPERIENCE':
            return {
                ...state,
                experience: state.experience.map((exp) => exp.id === action.payload.id)
                ? {...exp, [action.payload.field]: action.payload.value }
                : exp
            };
        case 'REMOVE_EXPERIENCE':
            return {
                ...state, 
                experience: state.experience.filter((exp)=> exp.id !== action.payload),
            };
        case 'ADD_EDUCATION':
            return {
                ...state,
                education: [
                    ...state.education,
                    {
                        id: Date.now(), 
                        institution: '', 
                        dagree: '',
                        years: ''
                    },
                ],
            };
            
        case 'UPDATE_EDUCATION':
            return {
                ...state,
                education: state.education.map((ed) => ed.id === action.payload.id)
                ? {...ed, [action.payload.field]: action.payload.value }
                : ed
            };
        case 'REMOVE_EDUCATION':
            return {
                ...state, 
                education: state.education.filter((ed)=> ed.id !== action.payload),
            };
        case 'UPDATE_SKILLS':
            return {
                ...state, 
                skills: action.payload,
            };
        case 'SET_THEME':
            return {
                ...state, theme: action.payload,
            };
        default:
            return state;
    }
}

export default CVProvider({ children }){
    const [state, dispatch] = useReducer(cvReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cv_data', JSON.stringify(state));
    }, [state]);
    return (
        <CVContext.Provider value={{state, dispatch}}>
            {children} 
        </CVContext.Provider>
    );
}
export function useCV(){
    const context = useContext(CVContext);
    if (!context){
        throw new Error('useCV должен использоваться внктри CVProvider');
    }
    return context;
}
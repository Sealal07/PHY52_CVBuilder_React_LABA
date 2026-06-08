import { useState } from 'react';
import { CVProvider } from './context/CVContext';
import { FormPanel } from './components/FormPanel';
import { PreviewPanel } from './components/PreviewPanel';

function App(){
  return (
    <CVProvider>
      <div className='app-container'>
        <header  className='app-header'>
          <h1>
            Конструктор резюме
          </h1>
          <p>Заполните форму слева</p>
        </header>
        <div className='app-grid'>
          <FormPanel />
          <PreviewPanel />
        </div>
      </div>
    </CVProvider>
  );
}
export default App;

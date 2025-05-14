import React from 'react';
const ExampleComponent = React.lazy(()=> import('./ExampleComponent'));
const ExamComponent = React.lazy(()=> import('./ExamComponent'));
function MyComponent() {  
    return (  
      <div>  
        <Suspense fallback={<div>Loading...</div>}>  
          <section>  
            <ExampleComponent />  
            <ExamComponent />  
          </section>  
        </Suspense>  
      </div>  
    );  
  }  
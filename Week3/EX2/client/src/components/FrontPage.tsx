import React from 'react';
import PersonParent from './PersonParent';
import CreatePerson from './CreatePerson';
import CreateAdress from './CreateAdress';
import DisplayAdresses from './DisplayAdresses';
import { useState } from 'react';

function FrontPage() {
    const [whatAreWeDisplaying, setWhatAreWeDisplaying] = useState<string | null>(null);

    return ( 
    <div>
        <h1>Front Page</h1>
        <p> This is the front page of the application. </p>

        <button onClick={() => setWhatAreWeDisplaying('people')}>Show People</button>
        <button onClick={() => setWhatAreWeDisplaying('createPerson')}>Create Person</button>
        <button onClick={() => setWhatAreWeDisplaying('createAdress')}>Create Adress</button>
        <button onClick={() => setWhatAreWeDisplaying('adresses')}>Show Adresses</button>



        {whatAreWeDisplaying === 'people' ? <PersonParent /> : null}
        {whatAreWeDisplaying === 'createPerson' ? <CreatePerson /> : null}
        {whatAreWeDisplaying === 'createAdress' ? <CreateAdress /> : null}
        {whatAreWeDisplaying === 'adresses' ? <DisplayAdresses /> : null}
    </div>
     );
}

export default FrontPage;
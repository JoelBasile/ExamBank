import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();



function App() {



  return (
    <Authenticator>
      {({ signOut, user }) => (

        <main>
          <h1>{user?.age}</h1>
          <div className="container">
            <h2>Find Exams</h2>
            <input type="text" placeholder="Search..." ></input>
            <button onClick={signOut}>Sign out</button>
            {/* <button onClick={(e) => {user.age = 20}}> he</button> */}
          </div>
                  
        </main>
      )}
    </Authenticator>
  );
}

export default App;

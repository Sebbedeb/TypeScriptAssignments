import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

function CreatePerson() {
  const CREATE_PERSON = gql`
    mutation createPerson($name: String!, $email: String!, $age: Int!) {
      createPerson(name: $name, email: $email, age: $age) {
        id
        age
        email
        imgURL
      }
    }
  `;

  const [person, setPerson] = useState({ name: "", email: "", age: 0 });
  const [createPerson, { loading, error }] = useMutation(CREATE_PERSON);

  const handleCreatePerson = () => {
    createPerson({ variables: person })
      .then(() => {
        setPerson({ name: "", email: "", age: 0 });
        console.log("Person created successfully!");
      })
      .catch((error) => {
        console.error("Error creating person:", error.message);
      });
  };

  return (
    <div>
      <h2>Create Person</h2>
      {error && <p>Error: {error.message}</p>}
      <div>
        <label>Name</label>
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
        <label>Age</label>
        <input
          type="number"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
        />
        <label>Email</label>
        <input
          type="text"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
        <button onClick={handleCreatePerson} disabled={loading}>
          {loading ? "Creating..." : "Create Person"}
        </button>
      </div>
    </div>
  );
}

export default CreatePerson;

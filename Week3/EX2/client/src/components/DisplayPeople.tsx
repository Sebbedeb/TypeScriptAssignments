import React from 'react';
import { useQuery, gql } from '@apollo/client';

type Person = {
    id: string;
    name: string;
    email: string;
    age?: number;
    address?: Address;
};

type Address = {
    id: string;
    street: string;
    city: string;
    zip: string;
    persons?: Person[];
};

const GET_PEOPLE = gql`
  query GetPeople {
    persons {
      id
      name
    }
  }
`;

interface DisplayPeopleProps {
  onPersonClick: (id: string) => void;
}

function DisplayPeople({ onPersonClick }: DisplayPeopleProps) {
  const { loading, error, data, refetch } = useQuery(GET_PEOPLE, {
    fetchPolicy: "network-only"
});


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <div>
        <h2>People</h2>
        {data.persons.map((person: Person) => (
          <button key={person.id} onClick={() => onPersonClick(person.id)}>
            {person.name}
          </button>
        ))}
      </div>
    );
}

export default DisplayPeople;

import React from 'react';
import { useQuery, gql } from '@apollo/client';

type Address = {
    id: string;
    street: string;
    city: string;
    zip: string;
    persons?: Person[];
};
type Person = {
    id: string;
    name: string;
    email: string;
    age?: number;
    address?: Address;
};

const GET_ADDRESSES = gql`
  query GetAddresses {
    adresses {
      city
      street
      zip
      persons {
        name
        email
      }
    }
  }
`;

function DisplayAddresses() {
  const { loading, error, data, refetch } = useQuery(GET_ADDRESSES, {
    fetchPolicy: "network-only"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Addresses</h2>
      {data.adresses.map((address: Address) => (
        <div key={address.id}>
          <h3>{address.street}</h3>
          <p>{address.city}</p>
          <p>{address.zip}</p>
          <h4>Persons</h4>
          <ul>
            {address.persons ? (
              address.persons.map((person) => (
                <li key={person.email}>
                  {person.name} - {person.email}
                </li>
              ))
            ) : (
              <li>No persons available</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DisplayAddresses;

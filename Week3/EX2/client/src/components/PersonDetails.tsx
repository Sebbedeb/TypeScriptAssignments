import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../personDetails.css"

const GET_PERSON = gql`
  query Person($personId: ID!) {
    person(id: $personId) {
      name
      age
      email
      imgURL
      adress {
        street
        zip
        city
      }
    }
  }
`;

function PersonDetails({ personId }: { personId: string }) {
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { personId: personId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, age, email, adress, imgURL } = data.person;
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>
        {imgURL && (
          <div className="personImgContainer">
            <img className="personImg" src={imgURL} alt="Person" />
          </div>
        )}
      </p>
      {adress && (
        <p>
          Address: {adress.street}, {adress.city}, {adress.zip}
        </p>
      )}
    </div>
  );
}
export default PersonDetails;

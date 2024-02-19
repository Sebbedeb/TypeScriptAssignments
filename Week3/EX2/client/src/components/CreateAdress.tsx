//Create a view with a form to create a new address. Using the graphql mutation createAddress to create a new address.

import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import react from "react";


function CreateAdress() {

    const CREATE_ADRESS = gql`
    mutation createAdress($street: String!, $city: String!, $zip: Int!) {
        createAdress(street: $street, city: $city, zip: $zip) {
            id
            street
            city
            zip
        }
    }
  `;

  const [adress, setAdress] = useState({ street: "", city: "", zip: 0 });
    const [createAdress, { loading, error }] = useMutation(CREATE_ADRESS);

const handleCreateAdress = () => {
    createAdress({ variables: adress })
      .then(() => {
        setAdress({ street: "", city: "", zip: 0 });
        console.log("Adress created successfully!");
      })
      .catch((error) => {
        console.error("Error creating adress:", error.message);
      });
  }

  return (
    <div>
        <h2>Create Adress</h2>
        {error && <p>Error: {error.message}</p>}
        <div>
            <label>Street</label>
            <input
            type="text"
            value={adress.street}
            onChange={(e) => setAdress({ ...adress, street: e.target.value })}
            />
            <label>City</label>
            <input
            type="text"
            value={adress.city}
            onChange={(e) => setAdress({ ...adress, city: e.target.value })}
            />
            <label>Zip</label>
            <input
            type="number"
            value={adress.zip}
            onChange={(e) => setAdress({ ...adress, zip: parseInt(e.target.value) })}
            />
            <button onClick={handleCreateAdress} disabled={loading}>
            {loading ? "Creating..." : "Create Adress"}
            </button>
        </div>
    </div>
    );
}


export default CreateAdress;

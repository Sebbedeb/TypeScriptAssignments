import React, { useState } from "react";
import DisplayPeople from "./DisplayPeople";
import PersonDetails from "./PersonDetails";

function PersonParent() {
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);

  const handlePersonClick = (id: string) => {
    setSelectedPersonId(id);
  };

  return (
    <div>
      {selectedPersonId !== null ? (
        <PersonDetails personId={selectedPersonId} />
      ) : (
        <DisplayPeople onPersonClick={handlePersonClick} />
      )}
    </div>
    
  );
}

export default PersonParent;

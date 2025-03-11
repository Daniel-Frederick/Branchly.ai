import React from "react";

interface Prop {
  list: string[];
}

const UserHistory: React.FC<Prop> = ({ list }) => {
  return (
    <>
      {list.map((e, index) => (
        <p key={index}>{e}</p>
      ))}
    </>
  );
};

export default UserHistory;

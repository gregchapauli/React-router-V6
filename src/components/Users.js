import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const users = ["roger", "stan", "francine", "steve", "hayley", "klaus"];

  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("name") || "";

  const handleSearch = (e) => {
    const name = e.target.value;
    name ? setSearchParams({ name }) : setSearchParams({});
  };

  const filteredUsers = users.filter((user) => user.includes(searchName));

  return (
    <div className="container mt-3">
      <h1>Profil</h1>
      <Outlet />
      <hr />
      <input type="text" value={searchName} onChange={handleSearch} />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

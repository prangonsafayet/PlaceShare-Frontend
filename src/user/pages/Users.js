import React from "react";
import { Helmet } from "react-helmet-async";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Prangon",
      image: "https://picsum.photos/200/300",
      places: 3,
    },
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>PlaceShare</title>
        <meta
          name="description"
          content="Placeshare app"
        />
      </Helmet>
      <UsersList items={USERS} />
    </React.Fragment>
  );
};

export default Users;

//output the list of users

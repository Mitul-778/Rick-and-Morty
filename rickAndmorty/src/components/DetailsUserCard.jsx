import React from "react";
import { Avatar } from "@chakra-ui/react";
import { CircleIcon } from "./Utils";

export const DetailsUserCard = ({ user }) => {
  return (
    <>
      <div id="avatar_name_div2">
        <Avatar size="xl" name={user.name} src={user.image} />
        <div>
          <h1>
            <b>{user.name}</b>
          </h1>
          <h1>
            <CircleIcon
              boxSize={3}
              color={
                user.status === "Alive"
                  ? "green"
                  : user.status === "Dead"
                  ? "red"
                  : "gray"
              }
            />
            {user.status} - {user.species}
          </h1>
        </div>
      </div>
      <hr style={{ marginLeft: "50px" }} />
      <div id="gender_location_div">
        <div>
          <p id="gray_font">Gender</p>
          <h1>
            <b>{user.gender}</b>
          </h1>
        </div>
        <div>
          <p id="gray_font">Location</p>
          <h1>
            <b>{user.location.name}</b>
          </h1>
        </div>
      </div>
      <div id="gender_location_div">
        <div>
          <p id="gray_font">Species</p>
          <h1>
            <b>{user.species}</b>
          </h1>
        </div>
        <div>
          <p id="gray_font">Origin</p>
          <h1>
            <b>{user.origin.name}</b>
          </h1>
        </div>
      </div>
    </>
  );
};

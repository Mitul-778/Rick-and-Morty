import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { CircleIcon } from "./Utils";
import { useState } from "react";
import { DetailsUserCard } from "./DetailsUserCard";
import InfiniteScroll from "react-infinite-scroll-component";

export const BasicUserCard = ({ getData, results }) => {
  const [user, setUser] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="container">
      <InfiniteScroll dataLength={results.length} next={getData} hasMore={true}>
        {results.map((e) => (
          <div
            id="basic_card"
            key={e.id}
            onClick={() => {
              onOpen();
              setUser(e);
            }}
          >
            <div id="avatar_name_div">
              <Avatar size="lg" name={e.name} src={e.image} />
              <p>
                <b>{e.name}</b>
              </p>
            </div>
            <div id="status_species_div">
              <h1>
                <CircleIcon
                  boxSize={3}
                  color={
                    e.status === "Alive"
                      ? "green"
                      : e.status === "Dead"
                      ? "red"
                      : "gray"
                  }
                />
                {e.status} - {e.species}
              </h1>
            </div>
          </div>
        ))}
      </InfiniteScroll>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <DetailsUserCard user={user} />
        </ModalContent>
      </Modal>
    </div>
  );
};

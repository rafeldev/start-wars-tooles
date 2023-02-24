import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Text, Image, Stack } from "@chakra-ui/react";

const Character = ({ character, getId }) => {
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
  return (
    <Card
      maxW="sm"
      borderRadius="0"
      backgroundColor="#FFEE58"
      opacity=".6"
      cursor="pointer"
      _hover={{ opacity: 1, transform: "scale(1.2)" }}
      transition={"0.2s ease-in-out"}
    >
      <CardBody p="0">
        <Image
          src={`${imgURL}${getId(character.url)}.jpg`}
          alt={character.name}
        />
        <Stack spacing="1" p="5%">
          <Text size="md">{character.name}</Text>
          <Text size="md" mt="0">
            {character.gender}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired,
  getId: PropTypes.func.isRequired,
};

export default Character;

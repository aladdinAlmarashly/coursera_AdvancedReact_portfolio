import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg="white" textColor="black">
      <Box>
        <Image src={imageSrc} borderRadius='lg'></Image>
      </Box>
      <Box p='6'>
        <Heading as='h5' size='sm'>{title}</Heading>
        <Text fontSize='sm' p='2' >{description}</Text>
        <Text fontSize='sm' p='2' as='b' >See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>

    </Box>


  );
};

export default Card;

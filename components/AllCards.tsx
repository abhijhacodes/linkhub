import { CardData, CardProps } from "../data/linkDetails";
import { SimpleGrid, Center } from "@chakra-ui/react";
import LinkCard from "./LinkCard";

const AllCards = (): any => {
  return (
    <Center mx={[2, 3]}>
      <SimpleGrid
        pt={10}
        columns={{ base: 1, md: 2 }}
        spacing={[7, 10]}
        mb={10}
      >
        {CardData.map((card: CardProps, index: number) => (
          <LinkCard key={index} {...card} />
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default AllCards;

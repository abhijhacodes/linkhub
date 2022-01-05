import type { NextPage } from "next";
import Head from "next/head";
import AllCards from "../components/AllCards";
import { Heading, Flex, Text } from "@chakra-ui/react";
import { fullName, tagline } from "../data/mainDetails";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>{fullName}</title>
        </Head>
      </div>
      <main>
        <div>
          <Flex
            direction="column"
            alignItems="center"
            bgGradient="linear(to-r, #03203C, #242B2E)"
          >
            <Heading
              as="h2"
              bgGradient="linear(to-b, #43B3AE, #FF6666)"
              bgClip="text"
              fontWeight="bold"
              mt="10"
              fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="center"
            >
              {fullName}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              color="green.100"
              fontWeight="light"
              mt="3"
            >
              {tagline}
            </Text>

            <AllCards />
          </Flex>
        </div>
      </main>
    </>
  );
};

export default Home;

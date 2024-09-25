import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import cryptoSrc from "../assets/crypto.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"whiteAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={cryptoSrc}
          filter={""}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"blackAlpha.700"}
        mt={"-20"}
      >
        Crypto-Insight
      </Text>
    </Box>
  );
};

export default Home;

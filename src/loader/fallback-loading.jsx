import { Flex } from "@chakra-ui/react";
import { PacmanLoader } from "react-spinners";
const FallbackLoading = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} minH={'100vh'}>
      <PacmanLoader color="#0b1111" />
    </Flex>
  );
};

export default FallbackLoading;

import { HashLoader } from "react-spinners";
import { Flex } from "@chakra-ui/react";

const CommonLoading = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
      <HashLoader color="#3646d6" size={100}/>
    </Flex>
  );
};

export default CommonLoading;

import { Grid } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Gif({ title, url }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };
  
  return (
    <Grid maxW="sm" borderWidth="2px" borderRadius="lg">
      <h4>{title}</h4>
      <img src={url} />
      <Button
        marginTop={"auto"}
        bgColor={"#B9D1F1"}
        padding={"10px"}
        onClick={onOpen}
      >
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody justifyContent={"center"} alignItems={"center"}>
          <img src={url}
           />
          <h1>
            URL: {url}
          </h1>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}  onClick={copyToClipboard}>
              Copy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
}

import { Box } from "@chakra-ui/react";
export default function Sticker( {title, url }) 
{
  return (
    <Box maxW='sm' borderWidth='2px' borderRadius='lg' >
      <h4>{title}</h4>
      <img src={url} />
    </Box>
  );
}
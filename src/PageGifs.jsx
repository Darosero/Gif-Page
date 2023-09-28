import { Button, Grid, Input } from "@chakra-ui/react";
import ListOfGif from "./components/ListOfGif";
import { useState } from "react";
import {
  Tab,
  TabIndicator,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

export default function PageGifs() {
  const [keyWord, setKeyword] = useState("panda");
  const [value, setValue] = useState("panda");

  return (
    <Grid templateColumns="1fr 7fr 1fr">
      <Grid bg="grey"></Grid>
      <Grid templateRows={"auto 8fr"} minHeight={"100vh"}>
        <Grid
          templateColumns={"auto 4fr 1fr"}
          bgColor={"#496892"}
          padding={"10px"}
          gap={"3"}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2305/2305938.png"
            height={"100px"}
            width={"100px"}
          />
          <Input
            marginTop={"auto"}
            bg="white"
            onChange={(event) => setKeyword(event.target.value)}
          />
          <Button
            marginTop={"auto"}
            bgColor={"#B9D1F1"}
            padding={"10px"}
            onClick={() => setValue(keyWord)}
          >
            Buscar
          </Button>
        </Grid>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Stickers</Tab>
            <Tab>Gifs</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="#496892"
            borderRadius="3px"
          />
          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                <ListOfGif
                  keyWord={{
                    typeElement: "Sticker",
                    value: value,
                  }}
                />
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                <ListOfGif
                  keyWord={{
                    typeElement: "Gif",
                    value: value,
                  }}
                />
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Grid>
      <Grid bg="grey"></Grid>
    </Grid>
  );
}

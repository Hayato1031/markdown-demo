import { useState } from "react";
import { Box, FormControl, Divider, Heading, Tabs, Tab, TabPanel, Textarea, Input } from "@yamada-ui/react"
import { Markdown } from "@yamada-ui/markdown"

export default function Home() {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const markdown = 
  `# ${title}
  ${text}


  ---------------------------------------
  by ${username}
  
  `
  const CSS = {
    header: {
      borderBottom: "solid",
      position: "fixed",
      width: "100%",
      backgroundColor: "white",
      zIndex: 1
    },
    background: {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundImage: "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
    },
    box: {
      background: "rgba(255, 255, 255, 0.25)",
      borderRadius: "20px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255, 255, 255, 0.25)"
    }
  }

  return (
    <>
      <Box style={CSS.background}>
      </Box>
      <Box style={CSS.header}>
        <Heading size="xl" paddingLeft="1rem" opacity="1" zIndex="2">
          Markdown
        </Heading>
      </Box>

      <Box paddingTop="2rem">
        <Box p="xl">
          <Tabs variant="rounded-solid" colorScheme="white">
            <Tab>投稿画面</Tab>
            <Tab>デモ表示</Tab>
            <TabPanel>
              <Box style={CSS.box} p="md">
                <Heading size="md" p="md">
                  投稿画面
                </Heading>
                <Divider />
                <FormControl label="タイトル" p="md">
                  <Input type="text" placeholder="タイトルを入力" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                </FormControl>
                <FormControl label="ユーザー名" p="md">
                  <Input type="text" placeholder="ユーザー名を入力" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                </FormControl>
                <FormControl label="マークダウン本文" p="md">
                  <Textarea placeholder="本文を入力" autosize minRows={4} value={text} onChange={(e) => {setText(e.target.value)}}>
                  </Textarea>
                </FormControl>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box style={CSS.box} p="xl">
                <Markdown p="md">
                  {markdown}
                </Markdown>
              </Box>
            </TabPanel>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

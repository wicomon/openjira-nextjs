import { Box } from "@mui/material";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar, SideBar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout:FC<Props> = ({children, title = 'OpenJira'}) => {

  return(
    <Box sx={{ flexGrow: 1 }} >
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <SideBar />
      <Box sx={{padding: '10px 20px'}} >
        {children}

      </Box>

    </Box>
  );
}

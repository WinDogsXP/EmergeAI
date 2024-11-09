"use client";
import Control from "react-leaflet-custom-control";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

export default function MapAddIssue() {
  const router = useRouter();
 

  return (
    <>
      <Fab
        size="medium"
        aria-label="locate"
        color="primary"
        onClick={() => {
        
            router.push("/map/issue/add");
          
          
        }}
      >
        <Add />
      </Fab>
    </>
  );
}

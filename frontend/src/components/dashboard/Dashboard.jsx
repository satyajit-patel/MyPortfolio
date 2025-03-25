import Home from "../home/Home";
import {TextRevealCardPreview} from "../card/TextRevealCardPreview";
import {PlaceholdersAndVanishInputDemo} from "../placeholders/PlaceholdersAndVanishInputDemo";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const VITE_BACKEND_API = import.meta.env.VITE_BACKEND_API;
  // console.log("ping", VITE_BACKEND_API);
    useEffect(() => {
      const wakeUpSidd = async () => {
        const response = await axios.post(`${VITE_BACKEND_API}/ping`);
        console.log(response.data);
      }
      wakeUpSidd();
    }, []);
    return (
      <>  
        <Home />
        <PlaceholdersAndVanishInputDemo />
        <TextRevealCardPreview />
      </>
    )
  }
  
  export default Dashboard
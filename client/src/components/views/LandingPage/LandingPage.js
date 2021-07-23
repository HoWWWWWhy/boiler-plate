import React, { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/hello");
      console.log(res);
      setGreeting(res.data);
    };
    fetchData();
    //axios.get("/api/hello").then((res) => console.log(res));
  }, []);

  return (
    <>
      <div>Landing Page</div>
      <div>{greeting}</div>
    </>
  );
}

export default LandingPage;

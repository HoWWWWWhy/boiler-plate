import React, { useEffect, useState } from "react";
import axios from "axios";

function LandingPage(props) {
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

  const onClickHandler = async () => {
    const res = await axios.get("/api/users/logout");
    console.log(res);
    if (res.data.success) {
      props.history.push("/login");
    } else {
      alert("로그아웃 실패!");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <h2>{greeting}</h2>
        </div>
        <button style={{}} onClick={onClickHandler}>
          로그아웃
        </button>
      </div>
    </>
  );
}

export default LandingPage;

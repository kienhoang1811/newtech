import React, { useEffect } from "react";
import axios from "axios";

function Header(props) {
  useEffect(() => {
    console.log("123");
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000");
    console.log(res.data);
  };

  return <div>123</div>;
}

export default Header;

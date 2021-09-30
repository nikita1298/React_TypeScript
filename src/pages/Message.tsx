import React, { useEffect } from "react";
import connect from "../util/messgeUtils";

export default function Message () {
  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="bgimg">

  <div className="middle">
    <h1>Messgae Page ....</h1>

  </div>
  <div className="bottomleft">
  </div>
</div>
  );
}

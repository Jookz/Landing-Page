import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>
        <Link
          className="text-green-900 text-7xl"
          to="https://www.linkedin.com/in/jonathan-chatterton-b6819019b/"
        >
          <img
            className="h-8"
            src="../../LinkedIn_icon_circle.svg.png"
            alt=""
          />{" "}
          Connect with me.
        </Link>
      </h1>
      <h1 className="text-green-900 text-7xl">📞 07902304953 Call me.</h1>
      <h1 className="text-green-900 text-7xl">
        ✉️ J.Chatterton456@gmail.com Email me.
      </h1>
      <h1 className="text-green-900 text-7xl">
        <textarea className="message" id="" cols="30" rows="10"></textarea>
        <button>Send</button>
        Tell me something.
      </h1>
    </div>
  );
}

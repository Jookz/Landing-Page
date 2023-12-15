import React, { useState } from "react";
import Junket from "./projects/Junket";
import NCNews from "./projects/NCNews";
import SwitchSelector from "react-switch-selector";
import Reveal from "../Reveal";

export default function Projects() {
  const [project, setProject] = useState("junket");

  const options = [
    {
      label: "Junket",
      value: "junket",
      selectedBackgroundColor: "#15803d",
    },
    {
      label: "NC-News",
      value: "nc-news",
      selectedBackgroundColor: "#15803d",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "junket"
  );

  const handleSwitch = (selectedValue) => {
    setProject(selectedValue);
  };

  return (
    <div id="projects">
      <div className="h-16"></div>
      <h2 className="text-green-900 md:text-8xl text-6xl">My Projects.</h2>
      <div className="w-48 h-8 mx-auto mt-12">
        <SwitchSelector
          onChange={handleSwitch}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"#14532d"}
          fontColor={"black"}
          selectedFontColor={"white"}
        />
      </div>
      <Reveal>{project === "junket" ? <Junket /> : <NCNews />}</Reveal>
    </div>
  );
}

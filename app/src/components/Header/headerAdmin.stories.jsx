import Header from "./headerAdmin";
import React, { useState } from "react";

export default {
  title: "Header/HeaderAdmin",
  component: Header,
  argTypes: {
    sidebarOpen: { control: "boolean" },
    darkMode: { control: "boolean" },
  },
};

const Template = (args) => {
  const [sidebarOpen, setSidebarOpen] = useState(args.sidebarOpen);
  const [darkMode, setDarkMode] = useState(args.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        {...args}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  sidebarOpen: false,
  darkMode: false,
};

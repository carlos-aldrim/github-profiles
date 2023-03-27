import React from "react";
import { Router } from "../Router";
import { ValueProvider } from "contexts";

export const App: React.FC = () => {

  return (
    <ValueProvider>
      <Router/>
    </ValueProvider>
  );
};
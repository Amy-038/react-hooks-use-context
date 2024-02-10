import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;

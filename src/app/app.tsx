"use client";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/redux/store";

import { Footer, Header } from "@/components";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute="class"
    >
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <div className="flex min-h-full flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

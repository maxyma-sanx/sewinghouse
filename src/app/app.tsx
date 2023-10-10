"use client";

import { Provider } from "react-redux";

import { store } from "@/redux/store";

import { Footer, Header } from "@/components";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./app/App";
import { store } from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productApi } from "./api/apiQuery";

const domNode = document.getElementById("root") as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <ApiProvider api={productApi}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);

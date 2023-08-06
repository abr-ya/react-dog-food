import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { App } from "app/App";
import { setupStore } from "app/store";
import { productApi } from "api/apiQuery";

const domNode = document.getElementById("root") as HTMLDivElement;
const root = createRoot(domNode);

const store = setupStore();

root.render(
  <StrictMode>
    <ApiProvider api={productApi}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);

import { createElement } from "react";
import { createRoot } from "react-dom/client";


const containor = createRoot(document.getElementById("root"))

const Name = <h1>You are the best prograammer i ever seen before</h1>

containor.render(
  Name
)


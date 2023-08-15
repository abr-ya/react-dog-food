interface ISign {
  sign: "plus" | "minus";
}

const Sign = ({ sign }: ISign) => (
  <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    {sign === "minus" && <path d="M19 13H5v-2h14v2z" />}
    {sign === "plus" && <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />}
  </svg>
);

export default Sign;

import Component6 from "./Component6";

function Component5(props) {
  return (
    <>
      <h4>This is prop f: {props.f}</h4>

      <Component6 e={props.e} />
    </>
  );
}

export default Component5;



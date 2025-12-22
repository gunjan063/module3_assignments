import Component5 from "./Component5";

function Component4(props) {
  return (
    <>
      <h4>This is prop c: {props.c}</h4>
      <h4>This is prop d: {props.d}</h4>

      <Component5 e={props.e} f={props.f} />
    </>
  );
}

export default Component4;




import React from "react";
import { Button } from "@design-system/design-system";
export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!{" "}
      <Button primary="true" label="Hello word"></Button>
    </section>
  );
}

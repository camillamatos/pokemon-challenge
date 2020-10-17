import { ReactElement } from "react";

const IF = ({
  test,
  children
}: {
  test: boolean,
  children: ReactElement
 }) => (test ? children : null);

export default IF;

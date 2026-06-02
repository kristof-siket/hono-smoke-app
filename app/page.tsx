// Intentionally broken build to exercise the failure path.
// This import resolves to nothing, so `next build` fails with
// "Module not found: Can't resolve './does-not-exist'".
import { somethingThatDoesNotExist } from "./does-not-exist";

export default function Home() {
  return <div>{somethingThatDoesNotExist}</div>;
}

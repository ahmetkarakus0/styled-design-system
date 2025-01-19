import { Alert, Button, Checkbox, Chip, Input } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Alert color="danger">
        <p>hello</p>
      </Alert>
      <Button color="danger" variant="outlined">
        hey
      </Button>
      <Checkbox color="danger" />
      <Chip color="danger" label="sasd" />
      <Input color="danger" label="sasd" />
    </div>
  );
}

export default App;

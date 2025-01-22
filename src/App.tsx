import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Tabs
        tabs={[
          { label: "Tab 1", value: "tab1" },
          { label: "Tab 2", value: "tab2" },
          { label: "Tab 3", value: "tab3" },
        ]}
      />
    </div>
  );
}

export default App;

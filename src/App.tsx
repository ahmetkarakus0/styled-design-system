import {
  Alert,
  Button,
  Card,
  Checkbox,
  Chip,
  Input,
  RadioButton,
  Select,
  Tabs,
  Toggle,
  Typography,
} from "./components";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Alert Variants */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Alerts</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "12px",
            }}
          >
            <Alert color="success">Success Alert</Alert>
            <Alert color="danger">Danger Alert</Alert>
            <Alert color="warning">Warning Alert</Alert>
            <Alert color="info">Info Alert</Alert>
          </div>
        </Card>

        {/* Button Variants */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Buttons</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "12px",
            }}
          >
            <Button variant="filled" color="primary">
              Primary Button
            </Button>
            <Button variant="filled" color="grey">
              Grey Button
            </Button>
            <Button variant="outlined" color="primary">
              Outlined Primary
            </Button>
            <Button variant="text" color="grey">
              Text Button
            </Button>
          </div>
        </Card>

        {/* Checkbox Variants */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Checkboxes</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "12px",
            }}
          >
            <Checkbox label="Checkbox" color="primary" />
            <Checkbox label="Checkbox" color="grey" />
            <Checkbox label="Checkbox" color="success" />
            <Checkbox label="Checkbox" color="danger" />
            <Checkbox label="Checkbox" color="warning" />
          </div>
        </Card>

        {/* Chips */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Chips</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="danger" />
            <Chip label="Warning" color="warning" />
          </div>
        </Card>

        {/* Input Fields */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Input Fields</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "12px",
            }}
          >
            <Input label="Standard" color="primary" />
            <Input label="Outlined" color="grey" />
            <Input label="Filled" color="primary" filled />
          </div>
        </Card>

        {/* Radio Buttons */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Radio Buttons</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "12px",
            }}
          >
            <RadioButton label="RadioButton" color="primary" />
            <RadioButton label="RadioButton" color="grey" />
            <RadioButton label="RadioButton" color="success" />
            <RadioButton label="RadioButton" color="danger" />
            <RadioButton label="RadioButton" color="warning" />
          </div>
        </Card>

        {/* Select */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Select</h3>
          <Select
            options={[
              { label: "Option 1", value: "Option 1" },
              { label: "Option 2", value: "Option 2" },
              { label: "Option 3", value: "Option 3" },
            ]}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.label}
            label="Select"
            color="primary"
          />
        </Card>

        {/* Tabs */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Tabs</h3>
          <Tabs
            tabs={[
              {
                value: "Tab 1",
                label: "Tab 1",
              },
              {
                value: "Tab 2",
                label: "Tab 2",
              },
            ]}
          />
        </Card>

        {/* Toggle */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Toggle</h3>
          <Toggle label="Toggle" color="primary" />
          <Toggle label="Toggle" color="grey" />
          <Toggle label="Toggle" color="success" />
          <Toggle label="Toggle" color="danger" />
          <Toggle label="Toggle" color="warning" />
        </Card>

        {/* Typography Variants */}
        <Card
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Typography</h3>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="subtitle">Subtitle</Typography>
          <Typography variant="subtitle2">Subtitle 2</Typography>
          <Typography variant="body">Body Text 1</Typography>
          <Typography variant="body2">Body Text 2</Typography>
          <Typography variant="caption">Caption</Typography>
        </Card>
      </div>
    </div>
  );
}

export default App;

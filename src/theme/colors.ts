export type ColorType =
  | "primary"
  | "grey"
  | "success"
  | "danger"
  | "warning"
  | "info";

type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Colors = Record<ColorType, Color>;

const colors: Colors = {
  primary: {
    50: "#EDEFFE",
    100: "#C8CEFC",
    200: "#AEB6FB",
    300: "#8895F9",
    400: "#7181F8",
    500: "#4E61F6",
    600: "#4758E0",
    700: "#3745AF",
    800: "#2B3587",
    900: "#212967",
  },
  grey: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EA",
    300: "#D2D5DB",
    400: "#9EA2AE",
    500: "#6D717F",
    600: "#4D5461",
    700: "#394050",
    800: "#212936",
    900: "#131927",
  },
  success: {
    50: "#ECF8EF",
    100: "#C5E9CD",
    200: "#A9DEB4",
    300: "#81CF92",
    400: "#69C57D",
    500: "#43B75D",
    600: "#3DA755",
    700: "#308242",
    800: "#256533",
    900: "#1C4D27",
  },
  danger: {
    50: "#FDECEC",
    100: "#FAC5C3",
    200: "#F7A9A7",
    300: "#F4827E",
    400: "#F16965",
    500: "#EE443F",
    600: "#D93E39",
    700: "#A9302D",
    800: "#832523",
    900: "#641D1A",
  },
  warning: {
    50: "#FFF7E6",
    100: "#FFE5B0",
    200: "#FFD88A",
    300: "#FFC654",
    400: "#FFBB33",
    500: "#FFAA00",
    600: "#E89B00",
    700: "#B57900",
    800: "#8C5E00",
    900: "#6B4700",
  },
  info: {
    50: "#E6F4FF",
    100: "#B0DEFF",
    200: "#8ACEFF",
    300: "#54B8FF",
    400: "#33AAFF",
    500: "#0095FF",
    600: "#0088E8",
    700: "#006AB5",
    800: "#00528C",
    900: "#003F6B",
  },
};

export default colors;

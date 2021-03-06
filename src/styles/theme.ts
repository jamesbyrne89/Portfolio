interface Colours {
  yellow: string;
  navy: string;
  grey: string;
  black: string;
}

interface FontSizes {
  headingLg: string;
  headingMd: string;
  headingSm: string;
  body: string;
}

export const colours: Colours = {
  yellow: "#feb63f",
  navy: "#163750",
  grey: "#efefef",
  black: "#3D4046",
};

export const fonts = {
  headingFont: "AvenirBlack",
  bodyFont: "AvenirBook",
};

export const fontSizes: FontSizes = {
  headingLg: "3.75rem",
  headingMd: "2.5rem",
  headingSm: "1.5rem",
  body: "1.25rem",
};

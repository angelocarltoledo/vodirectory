interface Resources {
  title: string;
  author: string;
  link: string;
}

const resources: Resources[] = [
  {
    title: "Belsheber Rusape Voice Demo Script Commissions",
    author: "Belsheber Rusape",
    link: "https://docs.google.com/document/d/1QHAeH4gtx_vSz958HqpANEBJ7nJRWPsPXVatcdWbU7M/edit?usp=sharing",
  },
  {
    title: "Rosters, Databases, and Where to Find Work!",
    author: "Sam Slade & Marcus Rothenberg",
    link: "https://docs.google.com/spreadsheets/d/17z2coJ5xRsIVz8lDvcln8fldxaat7YDnS0pOJ-SHxn4/edit?usp=sharing",
  },
  {
    title: "Voice Acting Database Winter 2021",
    author: "Jamie McKiernan",
    link: "https://docs.google.com/spreadsheets/d/1PxIHo3XbLVX4cVhQEMCGy_Y891wIzkIiQ413TLnWVy8/edit?usp=sharing",
  },
] as const;

export default resources;

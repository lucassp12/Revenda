const formatDateBRToISO = value => {
  return value
    ? value
        .split("/")
        .reverse()
        .join("-")
    : null;
};

const formatDateISOToBR = value => {
  return value
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");
};

module.exports = {
  formatDateBRToISO,
  formatDateISOToBR
};

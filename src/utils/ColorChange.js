let date = new Date();
let days = date.getDay();

export const textColor =
  days === 0
    ? "primary"
    : days === 1
    ? "secondary"
    : days === 2
    ? "third"
    : days === 3
    ? "fourth"
    : days === 4
    ? "fifth"
    : days === 5
    ? "sixth"
    : days === 6
    ? "seventh"
    : "primary";
export const navColor =
  days === 0
    ? "#ff6700"
    : days === 1
    ? "#ed217c"
    : days === 2
    ? "#09bc8a"
    : days === 3
    ? "#054a91"
    : days === 4
    ? "#a1674a"
    : days === 5
    ? "#ff6978"
    : days === 6
    ? "#20a4f3"
    : "#ff6700";

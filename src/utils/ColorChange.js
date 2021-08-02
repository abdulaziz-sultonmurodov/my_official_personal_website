let date = new Date();
let days = date.getDay();

export const textColorHover =
  days === 0
    ? "primary-hover"
    : days === 1
    ? "secondary-hover"
    : days === 2
    ? "third-hover"
    : days === 3
    ? "fourth-hover"
    : days === 4
    ? "fifth-hover"
    : days === 5
    ? "sixth-hover"
    : days === 6
    ? "seventh-hover"
    : "primary-hover";

export const borderColorHover =
  days === 0
    ? "primary-border-hover"
    : days === 1
    ? "secondary-border-hover"
    : days === 2
    ? "third-border-hover"
    : days === 3
    ? "fourth-border-hover"
    : days === 4
    ? "fifth-border-hover"
    : days === 5
    ? "sixth-border-hover"
    : days === 6
    ? "seventh-border-hover"
    : "primary-border-hover";

export const bgColorHover =
  days === 0
    ? "primary-bg-hover"
    : days === 1
    ? "secondary-bg-hover"
    : days === 2
    ? "third-bg-hover"
    : days === 3
    ? "fourth-bg-hover"
    : days === 4
    ? "fifth-bg-hover"
    : days === 5
    ? "sixth-bg-hover"
    : days === 6
    ? "seventh-bg-hover"
    : "primary-bg-hover";

export const textColor =
  days === 0
    ? "primary-text"
    : days === 1
    ? "secondary-text"
    : days === 2
    ? "third-text"
    : days === 3
    ? "fourth-text"
    : days === 4
    ? "fifth-text"
    : days === 5
    ? "sixth-text"
    : days === 6
    ? "seventh-text"
    : "primary-text";

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

export const imageTextHover =
  days === 0
    ? "primary-image-text-hover"
    : days === 1
    ? "secondary-image-text-hover"
    : days === 2
    ? "third-image-text-hover"
    : days === 3
    ? "fourth-image-text-hover"
    : days === 4
    ? "fifth-image-text-hover"
    : days === 5
    ? "sixth-image-text-hover"
    : days === 6
    ? "seventh-image-text-hover"
    : "primary-image-text-hover";

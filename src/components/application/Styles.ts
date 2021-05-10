export const imageBackgroundStyle = (imageLink?: string, fading = 0.45) => {
  const image =
    imageLink || "https://media.giphy.com/media/L0xAO5RZ5tqT7IUHZl/giphy.gif";

  return `linear-gradient(rgba(0, 0, 0, ${fading}), rgba(0, 0, 0, ${fading})), url(${image}) no-repeat center center`;
};

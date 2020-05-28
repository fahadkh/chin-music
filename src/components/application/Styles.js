export const mixinStyles = (styleGenerator, props) => {
  var overrideClasses = props.classes !== undefined ? props.classes : {};
  const filteredOverrideClasses = Object.keys(overrideClasses).forEach(
    (key) => overrideClasses[key] === undefined && delete overrideClasses[key]
  );

  return {
    ...styleGenerator(props),
    ...filteredOverrideClasses,
  };
};

export const classNames = (...classNames) => {
  let classes;

  classes = [...classNames];
  classes.reverse();

  return classes.join(" ");
};

export const imageBackgroundStyle = (imageLink, fading = 0.45) => {
  const image =
    imageLink || "https://media.giphy.com/media/L0xAO5RZ5tqT7IUHZl/giphy.gif";

  return `linear-gradient(rgba(0, 0, 0, ${fading}), rgba(0, 0, 0, ${fading})), url(${image}) no-repeat center center`;
};

export const containerStyles = (theme) => ({
  display: "flex",
  width: theme.contentPercentage,
  maxWidth: theme.maxContentWidth,
  marginLeft: "auto",
  marginRight: "auto",
});

export const responsiveContainerStyles = (theme) => ({
  marginLeft: theme.spacing * 3,
  marginRight: theme.spacing * 3,
  maxWidth: "unset",
  width: "100%",
});

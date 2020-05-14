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

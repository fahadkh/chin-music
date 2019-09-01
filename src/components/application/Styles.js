export const mixinStyles = (styleGenerator, props) => {

    var overrideClasses = props.classes !== undefined ? props.classes : {}
    const filteredOverrideClasses = 
        Object
            .keys(overrideClasses)
            .forEach(key => 
                overrideClasses[key] === undefined && delete overrideClasses[key]
            )

    return {
        ...styleGenerator(props),
        ...filteredOverrideClasses
    }
}
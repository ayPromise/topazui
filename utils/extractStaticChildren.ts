import React from "react";

const extractStaticChildren = (children: React.ReactNode, staticComponents: React.FC<any>[]) => {
    //@ts-ignore
    const childElements = (children && children.type===React.Fragment) ? React.Children.toArray(children.props.children) :React.Children.toArray(children)
    const extractedComponents: { [componentName: string]: React.ReactNode } = {};


    childElements.forEach((child) => {
        if (React.isValidElement(child)) {
            staticComponents.forEach((StaticComponent) => {
                if (child.type === StaticComponent) {
                    extractedComponents[StaticComponent.displayName || StaticComponent.name] = child;
                }
            });
        }
    });

    return extractedComponents;
};

export default extractStaticChildren;

import React from "react";

const extractStaticChildren = (children:React.ReactNode, staticComponents:React.FC<any>[])=>{
    if (!children) {
        return {};
    }
    // @ts-ignore

    const childElements = Array.isArray(children.props.children) ? children.props.children as React.ReactNode[] : children
    
    const extractedComponents :{
        [componentName:string] : React.ReactNode
    }= {}

    const processChildElement = (child: React.ReactNode) => {
        if (React.isValidElement(child)) {
            staticComponents.forEach((StaticComponent) => {
                if (child.type === StaticComponent) {
                    extractedComponents[StaticComponent.displayName || StaticComponent.name] = child;
                }
            });
        }
    };

    if(Array.isArray(childElements))
        childElements.forEach((child) => {
            if (React.isValidElement(child)) {
                processChildElement(child)
            }
        });
    else
        processChildElement(childElements)

    return extractedComponents
}

export default extractStaticChildren
import React from "react";

type StaticComponentType = {
    component:React.FC<any>
    multiple?:boolean;
}


const extractStaticChildren = (children: React.ReactNode, staticComponents: StaticComponentType[]) => {

    //@ts-ignore
    const childElements = (children && children.type===React.Fragment) ? React.Children.toArray(children.props.children) :React.Children.toArray(children)
    const extractedComponents: { [componentName: string]: React.ReactNode | React.ReactNode[] } = {};


    childElements.forEach((child) => {
        if (React.isValidElement(child)) {
            staticComponents.forEach((StaticComponent) => {
                if (child.type === StaticComponent.component) {
                    if(!StaticComponent.multiple)
                        extractedComponents[StaticComponent.component.displayName || StaticComponent.component.name] = child;
                    else
                        if(Array.isArray(extractedComponents[StaticComponent.component.displayName || StaticComponent.component.name]))
                          {
                              {/*@ts-ignore*/}
                            extractedComponents[StaticComponent.component.displayName || StaticComponent.component.name].push(child)
                          }
                        else
                            extractedComponents[StaticComponent.component.displayName || StaticComponent.component.name] = [child]
                        
                }
            });
        }
    });

    return extractedComponents;
};

export default extractStaticChildren;

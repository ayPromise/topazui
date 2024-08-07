import React,{ Children } from "react"

const getTextForLabel = (children: React.ReactNode) => {
    let text: string = ""
    //@ts-ignore
    const childElements = (children && children.type === React.Fragment) ? React.Children.toArray(children.props.children) : React.Children.toArray(children)

    Children.forEach(childElements, c => {
        if (typeof c === 'string' || c instanceof String) {
            text = c.toString()
        }
    })

    return text
}

export default getTextForLabel
import React from "react"


type ButtonProps = {
    color: 'primary' | 'dark' | 'red'
}

const Button = (props: ButtonProps) => {
    return <button className={`${props.color}`}>Sa</button>;
}

export default Button;
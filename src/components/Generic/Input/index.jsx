import React from 'react'
import { Container } from './style'

export const Input = ({
    type,
    onClick,
    value,
    defaultValue,
    placeholder,
    name,
    width,
    height,
}) => {
    return (
        <Container
            placeholder={placeholder}
            name={name}
            onChange={onClick}
            value={value}
            defaultValue={defaultValue}
            width={width} 
            type={type}
            height={height}
        />

    )
}

export default Input;
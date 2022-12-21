import React, { forwardRef } from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = forwardRef(({
    type,
    onClick,
    value,
    defaultValue,
    placeholder,
    name,
    width,
    height,
    icon,
},
ref
 ) => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <Container
                ref={ref}
                icon={<icon />}
                placeholder={placeholder}
                name={name}
                onChange={onClick}
                value={value}
                defaultValue={defaultValue}
                width={width}
                type={type}
                height={height}
            />
        </Wrapper>
    )
})
export default Input;
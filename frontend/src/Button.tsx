import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

type Props = {
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => void | Promise<void>;
    title: string;
};

const ButtonStyle = styled.button`
    display: inline-block;
    color: black;
    font-size: 13px;
    margin: 1px;
    width: 120px;
    height: 40px;
    border: 1px solid #21282d;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
`;

const Button = ({ onClick, title }: Props): React.ReactElement => <ButtonStyle onClick={onClick}>{title}</ButtonStyle>;

export default Button;

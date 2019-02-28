import React from 'react';
import styled from 'styled-components';


const SearchBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
     
    ${props => (props.type === 'searchBarTypeTest' ? `background: yellow` : null)}
    
`;

const InstaCursive = styled.img`
    width: 200px;
    height: 100%;
    `;

const FormInput = styled.input`
    font-size: 30px;
    background-color: #000000;
    color: #ffffff;
    `;



export {SearchBarDiv, InstaCursive, FormInput};

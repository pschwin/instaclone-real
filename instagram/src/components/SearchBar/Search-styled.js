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

export {SearchBarDiv, InstaCursive};

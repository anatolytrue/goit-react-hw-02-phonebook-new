import styled from "@emotion/styled";

export const FilterContainer = styled.div`
    margin-bottom: 8px;
    color: #102445;
    font-size: 16px;
    // border: solid 1px #DCDCDC;
    padding: 16px 36px;
    max-width: 320px;
`

export const FilterLabel = styled.label` 
    display: block;
    margin-bottom: 8px;
    width: 100%;

`

export const FilterInput = styled.input`
    border-radius: 4px;
    margin-right: $ruler/2;
    box-shadow:  inset 2px 2px 5px #DCDCDC, inset -5px -5px 10px whitesand;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    outline: none;

    &:focus {
        box-shadow:  inset 1px 1px 2px grey, inset -1px -1px 2px whitesand;
    }
`
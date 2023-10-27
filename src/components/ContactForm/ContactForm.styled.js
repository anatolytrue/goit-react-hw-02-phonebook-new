import styled from "@emotion/styled";

export const FormStyled = styled.form`
    // max-width: 50%;
    // display: flex;
    // flex-direction: column;
    // // justify-content: center;
    // align-items: center;
    border: solid 1px #DCDCDC;
    padding: 16px 36px;
`

export const FormItem = styled.div`
    margin-bottom: 8px;
    color: #102445;
    font-size: 16px;

`

export const FormBtn = styled.button`

    background-image: linear-gradient(#42A1EC, #0070C9);
    border: 1px solid #0077CC;
    border-radius: 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    direction: ltr;
    display: inline-block;
    font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -.022em;
    line-height: 1.47059;
    min-width: 30px;
    overflow: visible;
    padding: 4px 16px;
    text-align: center;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    
    &:hover {
        background-image: linear-gradient(#51A9EE, #147BCD);
        border-color: #1482D0;
        text-decoration: none;
    }

    &:active {
    background-image: linear-gradient(#3D94D9, #0067B9);
    border-color: #006DBC;
    outline: none;
    }

    &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
    }
`
export const FormLabel = styled.label` 
    display: block;
    margin-bottom: 8px;
    width: 100%;

`

export const FormInput = styled.input`
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


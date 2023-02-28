import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 0 10px;
    margin-bottom: 20px;

    &:focus {
        outline: none;
        border: 1px solid rgba(185,111,4,255);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 5px 10px;
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border: 1px solid rgba(185,111,4,255);
    }
`;

export default Input;
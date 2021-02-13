import Link from 'next/link'
import { A, Button, Title, Input, Wrapper, InputWrapper } from '../styles/module.form.style'

interface FormProps {
    valueName?: string
    valueComment?: string
    inputName?: any 
    inputComment?: any
    onNewPost?: any 
  }; 

export function Form(props: FormProps) {
    const {inputName, inputComment, valueName, valueComment, onNewPost} = props;

    return (
        <Wrapper> 
            <Title>Post</Title>
            <InputWrapper>
            <Input 
            value={valueName}
            onChange={inputName}
            type='text'
            placeholder='Name'
            />
            <Input 
            value={valueComment}
            onChange={inputComment}
            type='text'
            placeholder='Comment'
            />
            <Button onClick={onNewPost}>New Post</Button>
            <Link href='/'><A>Back to Home</A></Link>
            </InputWrapper>
        </Wrapper>
    )
}
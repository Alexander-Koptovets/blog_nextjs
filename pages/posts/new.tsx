import { Form } from '../../components/form'
import {useState } from 'react'

export default function NewPost() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
  
    async function addNewPost() {
      const response = await fetch('https://simple-blog-api.crew.red/posts', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  title: name,
                  body: comment,
              })
          });
          setName('');
          setComment('');               
    };
  
    return (
        <Form
        inputName={(e) => setName(e.target.value)}
        inputComment={(e) => setComment(e.target.value)}
        valueName ={name}
        valueComment={comment}
        onNewPost={() => addNewPost()}
        />
    )
  }
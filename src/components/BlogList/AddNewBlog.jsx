'use client'
import React, { useState } from 'react'
import './AddNewBlog.css'
import Button from '../UI/Button'
function AddNewBlog({ onClose,onAddBlog }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBlog = { id: Date.now(),title, author, content, date, image }
        onAddBlog(newBlog)
    }
    return (
        <>
            <div className='modal'>
                <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label>
                            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label>Author:</label>
                            <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div>
                            <label>Content:</label>
                            <input type='text' value={content} onChange={(e) => setContent(e.target.value)} />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type='text' value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <label>Image URL:</label>
                            <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        {/* <button type='submit'>Add Blog</button> */}
                        <Button color="success" size='medium' type='submit'>Add Blog</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNewBlog
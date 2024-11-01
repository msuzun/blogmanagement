'use client'
import AddNewBlog from "@/components/BlogList/AddNewBlog";
import BlogList from "@/components/BlogList/BlogList";
import { useState } from "react";
import initialBlogData from '../data/blogData.js'
import Button from '../components/UI/Button.jsx'
export default function Home() {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [blogData,setBlogData] = useState(initialBlogData)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const addNewBlog = (newBlog) =>{
    setBlogData([...blogData,newBlog])
    closeModal()
  }
  return (
    <>
      <BlogList  blogData={blogData}/>
      <Button color="danger" size='large' onClick={openModal}>Add New Blog</Button>
      {isModalOpen && <AddNewBlog onClose={closeModal} onAddBlog={addNewBlog}/>} 
    </>
  );
}

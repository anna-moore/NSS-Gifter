import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import { Button, Form, Col, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';

export const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext);

    // setting the state
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState({
        userProfileId: "",
        title: "",
        imageUrl: "",
        caption: "",
    });

    // Saving user input 
    const handleControlledInputChange = (e) => {
        const newPost = { ...post }
        newPost[e.target.id] = e.target.value;
        setPost(newPost);
    }

    // creating the click event for the save btn

    const handleClickSavePost = (e) => {
        e.preventDefault()
        setIsLoading(true)

        addPost({
            userProfileId: post.userProfileId,
            title: post.title,
            imageUrl: post.imageUrl,
            caption: post.caption,

        })
            .then(getAllPosts)
    }


    return (
        <>
            <div className="postForm">
                <Form>
                    <FormGroup row>
                        <Label for="newPostTitle" sm={2}>Title:</Label>
                        <Col sm={5}>
                            <Input type="text" name="postTitle" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Title" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageUrl">Image Url</Label>
                        <Col sm={5}>
                            <Input type="text" name="image" id="imageUrl" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image Url" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="caption">Caption</Label>
                        <Col sm={5}>
                            <Input type="text" name="caption" id="caption" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Caption" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userProfileId"></Label>
                        <Input type="hidden" name="userProfileId" id="userProfileId" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value="1" />
                        <Input type="hidden" name="dateCreated" id="dateCreated" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value="04/12/2021" />
                        <Button
                            className="btn btn-primary"
                            onClick={event => {
                                handleAddPost()
                            }}>Add Post</Button>
                    </FormGroup>
                </Form>
            </div>
        </>
    );

}
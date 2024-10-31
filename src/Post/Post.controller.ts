// src/Post/Post.controller.ts
import { Request, Response } from 'express';
import { PostService } from './Post.service';

const postService = new PostService();

    export const createPost = async (req: Request, res: Response) => {
        const newPost = await postService.createPost(req.body);
        res.json(newPost);
    };//createPost

    export const getAllPosts = async (req: Request, res: Response) => {
        const posts = await postService.getAllPosts();
        res.json(posts);
    };//getAllPosts

    export const getPostById = async (req: Request, res: Response) => {
        const { postId } = req.params;
        try {
            const post = await postService.getPostById(postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    };//getPostById

    export const updatePost = async (req: Request, res: Response) => {
        const { postId } = req.params;
        try {
            const updatedPost = await postService.updatePost(postId, req.body);
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    };//updatePost

    export const deletePost = async (req: Request, res: Response) => {
        const { postId } = req.params;
        try {
            await postService.deletePost(postId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error });
        }
    };//deletePost


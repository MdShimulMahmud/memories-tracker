import express from "express";

import {
  createPosts,
  deletePosts,
  getPosts,
  likePosts,
  updatePosts,
} from "../controllers/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);
router.patch("/:id/likePost", likePosts);
export default router;

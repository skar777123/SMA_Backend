import Post from "../models/postModel.js";

export const AddComment = async (req, res) => {
  const comment = req.body.comment;
  const postId = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(
      { _id: postId },
      {
        $push: {
          type: Array,
          comments: comment,
        },
      },
      { new: true }
    );
    if (!post) {
      res.status(404).json({
        message: " Failed to add a comment",
      });
    }
    res.status(200).json({
      message: "Comment Added",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const Addlikes = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (post.likes.includes(loggedInUserId)) {
      // dislike
      await Post.findByIdAndUpdate(postId, {
        $pull: { type: Array, likes: loggedInUserId },
      });
      return res.status(200).json({
        message: "User disliked a Post",
      });
    } else {
      // like
      await Post.findByIdAndUpdate(postId, {
        $push: { type: Array, likes: loggedInUserId },
      });
      return res.status(200).json({
        message: "User liked a Post.",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

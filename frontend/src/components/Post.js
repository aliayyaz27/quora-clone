import React, { useState } from "react";
import "./css/Post.css";
import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";
import { selectUser } from "../feature/userSlice";
import { useSelector } from "react-redux";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;
  const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleSubmit = async () => {
    if (post._id && answer !== "") {
      const body = {
        answer: answer,
        questionId: post._id,
        user: user,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          setIsModalOpen(false);
          alert("Answer added successfully");
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={post?.user?.photo} />
        <h4>{post?.user?.userName}</h4>
        <small>
          <LastSeen date={post.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post.questionName}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: { height: "auto" },
            }}
          >
            <div className="modal__question">
              <h1>{post.questionName}</h1>
              <p>
                asked by <span className="name">{post?.user?.userName}</span> on{" "}
                <span className="name">
                  {new Date(post.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                onChange={handleQuill}
                value={answer}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal__button">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} className="add" type="submit">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl && <img src={post.questionUrl} alt="url" />}
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post.allAnswers.length} Answer(s)
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        {post.allAnswers.map((ans) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px ",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#888",
                }}
                className="post-answered"
              >
                <Avatar src={ans?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{ans?.user?.userName}</p>
                  <span>
                    <LastSeen date={ans.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(ans.answer)}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Post;

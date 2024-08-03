import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import {
  FeaturedPlayListOutlined,
  AssignmentTurnedInOutlined,
  PeopleAltOutlined,
  NotificationsOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  // State for input field
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    console.log("Add question clicked");
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          setIsModalOpen(false);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Unexpected error occured while adding your question");
        });
      setQuestion("");
      setInputUrl("");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Do you want to Logout?")) {
      signOut(auth)
        .then((res) => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://static-00.iconduck.com/assets.00/quora-icon-495x512-sp3u96sp.png"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlined />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <span onClick={handleLogout}>
            <Avatar src={user.photo} />
          </span>
          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Add Question
          </Button>
        </div>
        <Modal
          modalId="questionForm"
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
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" src={user?.photo} />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Start your question with 'what','how','why' etc."
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                style={{
                  margin: "5px 0px",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: include a link that gives context"
              />
              {inputUrl !== "" && (
                <img
                  src={inputUrl}
                  alt=""
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleSubmit} className="add" type="submit">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;

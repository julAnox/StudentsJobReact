import React, { useState } from "react";
import ResponseWindow from "../ResponseWindow/ResponseWindow";
import "./VacancyBlock.css";

const VacancyBlock = ({ vacancyData = {}, chats = [], setChats }) => {
  const [isResponseWindowOpen, setIsResponseWindowOpen] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState("");

  const {
    title = "React Web Developer",
    company = "Microsoft",
    location = "Minsk",
    salary = "1500BYN",
    description = "Here you can improve your skills like hard or soft",
  } = vacancyData;

  const handleApplyClick = () => {
    setSelectedVacancy(title);
    setIsResponseWindowOpen(true);
  };

  const handleCloseResponseWindow = () => {
    setIsResponseWindowOpen(false);
  };

  const handleSubmit = (applicationData) => {
    setIsResponseWindowOpen(false);
    const { company, vacancy, selectedFileName, coverLetter } = applicationData;
    createChat(company, vacancy, selectedFileName, coverLetter);
  };

  const createChat = (company, vacancy, selectedFileName, coverLetter) => {
    if (!Array.isArray(chats)) {
      console.error("Chats is not an array:", chats);
      return;
    }

    const initialMessages = [
      {
        text: `Resume: ${selectedFileName}`,
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      {
        text: `Cover Letter: ${coverLetter}`,
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ];

    const newChat = {
      id: Math.random().toString(36).substr(2, 9),
      name: company,
      vacancy,
      messages: initialMessages,
      status: "Chat created",
      selectedFileName,
      coverLetter,
    };

    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));

    localStorage.setItem(
      "applicationData",
      JSON.stringify({
        company,
        vacancy,
        selectedFileName,
        coverLetter,
      })
    );
  };

  return (
    <>
      <div className="vacancy-block">
        <h3 className="vacancy-title">{title}</h3>
        <p className="vacancy-description">{company}</p>
        <p className="vacancy-description">{description}</p>
        <div className="vacancy-info">
          Location: {location} | Salary: {salary}
        </div>
        <div className="vacancy-action">
          <button className="vacancy-button" onClick={handleApplyClick}>
            Apply Now
          </button>
        </div>
      </div>
      <ResponseWindow
        isOpen={isResponseWindowOpen}
        onClose={handleCloseResponseWindow}
        company={company}
        vacancy={selectedVacancy}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default VacancyBlock;

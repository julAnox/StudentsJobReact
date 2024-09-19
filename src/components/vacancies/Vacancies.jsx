import React, { useState } from "react";
import Navbar from "../../layout/navbar/Navbar";
import "./Vacancies.css";

const Vacancies = () => {
  const [experience, setExperience] = useState(0);
  const [income, setIncome] = useState(200);

  return (
    <div>
      <Navbar />
      <div className="filters">
        <div className="city">
          <ul>
            Город:
            <li>
              <input type="checkbox" /> Минск
            </li>
            <li>
              <input type="checkbox" /> Гомель
            </li>
            <li>
              <input type="checkbox" /> Брест
            </li>
            <li>
              <input type="checkbox" /> Гродно
            </li>
            <li>
              <input type="checkbox" /> Витебск
            </li>
            <li>
              <input type="checkbox" /> Могилев
            </li>
          </ul>
        </div>

        <div className="metro">
          <label>Станция:</label>
          <select>
            <option>Не выбрано</option>
            <option>Уручье</option>
            <option>Борисовский тракт</option>
          </select>
        </div>

        <div className="exp_lvl">
          <label>Уровень опыта (в годах):</label>
          <input
            type="range"
            id="experience"
            name="experience"
            min="0"
            max="15"
            step="0.5"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="slider"
          />
          <p>Выбрано: {experience} лет</p>
        </div>

        <div className="income">
          <label>Уровень дохода:</label>
          <input
            type="range"
            id="income"
            name="income"
            min="200"
            max="10000"
            step="100"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="slider"
          />
          <p>Выбрано: {income} BYN</p>
        </div>

        <div className="employment">
          <label>Занятость:</label>
          <select id="employment">
            <option>Не выбрано</option>
            <option value="full-time">Полная занятость</option>
            <option value="part-time">Частичная занятость</option>
            <option value="freelance">Разовая работа</option>
            <option value="internship">Стажировка</option>
          </select>
        </div>

        <div className="schedule">
          <label>График работы:</label>
          <select id="schedule">
            <option>Не выбрано</option>
            <option value="full-day">Полный день</option>
            <option value="shift">Сменный график</option>
            <option value="flexible">Гибкий график</option>
            <option value="remote">Удаленная работа</option>
          </select>
        </div>

        <div className="podrabotka">
          <ul>
            Подработка:
            <li>
              <input type="checkbox" /> Разовое задание
            </li>
            <li>
              <input type="checkbox" /> Неполный день
            </li>
            <li>
              <input type="checkbox" /> От 4 часов в день
            </li>
            <li>
              <input type="checkbox" /> По выходным
            </li>
            <li>
              <input type="checkbox" /> По вечерам
            </li>
          </ul>
        </div>

        <div className="sort">
          <ul>
            Сортировка:
            <li>
              <input type="radio" name="sort" /> По соответствию
            </li>
            <li>
              <input type="radio" name="sort" /> По дате изменения
            </li>
            <li>
              <input type="radio" name="sort" /> По убыванию зарплат
            </li>
            <li>
              <input type="radio" name="sort" /> По возрастанию зарплат
            </li>
          </ul>
        </div>

        <div className="output">
          <ul>
            Выводить:
            <li>
              <input type="radio" name="output" /> За все время
            </li>
            <li>
              <input type="radio" name="output" /> За месяц
            </li>
            <li>
              <input type="radio" name="output" /> За неделю
            </li>
            <li>
              <input type="radio" name="output" /> За последние три дня
            </li>
            <li>
              <input type="radio" name="output" /> За сутки
            </li>
          </ul>
        </div>

        <div className="show">
          <ul>
            Показывать на странице:
            <li>
              <input type="radio" name="show" /> 20 вакансий
            </li>
            <li>
              <input type="radio" name="show" /> 50 вакансий
            </li>
            <li>
              <input type="radio" name="show" /> 100 вакансий
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;

import React, { useState } from "react";


function RandomArray() {
  const [array, setArray] = useState([]);

  const generateRandomArray = () => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push(Math.floor(Math.random() * 100)); //генерируем случайное число от 0 до 99
    }
    setArray(randomArray);
  };

  return (
    <div>
      <button onClick={generateRandomArray}>Сгенерировать массив</button>
      <ul>
        {array.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default RandomArray;
// В этом примере мы используем хук useState, чтобы создать состояние array, которое будет содержать сгенерированный массив чисел. Когда пользователь нажимает на кнопку "Сгенерировать массив", вызывается функция generateRandomArray, которая генерирует массив из 10 случайных чисел в диапазоне от 0 до 99. Мы затем используем метод map для отображения каждого числа


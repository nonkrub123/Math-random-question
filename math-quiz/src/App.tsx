import React, { useState } from "react";

const App: React.FC = () => {
  const questions = [
    { problem: "พ่อต้องการเดินทางไปทำงาน โดยขึ้นรถไฟฟ้าได้ 7 สาย เเละ ขึ้นรถเมล์ได้ 12 สาย พ่อสามารถเดินทางไปถึงที่ทำงานโดยขึ้นเเค่ 1 สาย ได้กี่วิธี", answer: 19 }, 
    { problem: "ข้าวต้องการเดินทางไปห้างสรรพสินค้า โดยเดินทางด้วยรถ 8 เส้นทาง เดินทางด้วยเรือ 4 เส้นทาง ข้าวสามารถเลือกเดินทางได้ครั้งละ 1 เส้นทาง ได้กี่วิธี", answer: 12 }, 
    { problem: "ร้านอาหารมีเมนูข้าว 12 เมนู มีเมนูเส้น 10 เมนู มีขนมหวาน 7 เมนุ โดยเสิร์ฟอย่างละ 1 เมนู ร้านจะเสิร์ฟได้กี่วิธี", answer: 840 }, 
    { problem: "ปั้น ต้องการเเต่งตัวออกไปข้างนอก โดยมีเสื้อ 9 ตัว กางเกง 13 ตัว โดยเลือกอย่างละ 1 ตัว จะเลือกได้กี่วิธี", answer: 117 }, 
    { problem: "เก่งต้องการเดินทางไปร้านอาหาร โดยเดินทางด้วยเรือได้  4 วิธี เเล้วต้องเดินทางต่อ ด้วยรถอีก 7 วิธีหรือรถไฟอีก 5 วิธี เก่งจะเดินทางได้มั้งหมดกี่วิธี", answer: 48 }, 
    { problem: "ร้านเสต็กเเห่งหนึ่งมีเสต็กอยู่ 29 เมนู เเล้วมีเครื่องมีเครื่องเคียง 13 เมนู โดยเสต็ก 1 เมนู เลือกเครื่องเคียงได้ 2 อย่างที่ไม่ซ้ำกัน ถ้าร้านต้องการเสิร์ฟเสต็ก 1 จานพร้อมเครื่องเคียง ร้านจะเสิร์ฟได้กี่วิธี", answer: 4524 }, 
    { problem: "โรงหนังเเห่งหนึ่งมีประตูสำหรับเข้าออกทั้งหมด 7 ประตู โดยเเต่ละคนเข้าและออกประตูไหนก็ได้ จะได้ทั้งหมดกี่วิธี", answer: 49 }, 
    { problem: "คอนเสิร์ตเเห่งหนึ่งมีทางเข้าออกทั้งหมด 10 ประตู พลอยเเละฟ้าต้องการเดินเข้าและออกจากคอนเสิร์ต โดยเข้าทางใด ห้ามออกทางนั้น ทั้งคู่จะทำได้กี่วิธี", answer: 8100 }, 
    { problem: "มีลูกบอล 5 ลูกเเตกต่างกัน นำไปใส่กล่อง 3 กล่อง โดยเแตละลูกจะใส่กล่องไหนก็ได้ ได้กี่วิธี", answer: 60 }, 
    { problem: "มีหนังสือ 7 เล่มเเตกต่างกัน นำไปใส่กล่อง 9 กล่อง ไม่มีเล่มไหนใส่กล่องเดียวกัน ได้กี่วิธี", answer: 181440 }, 
    { problem: "มีปากกาอยุ่ 5 เเท่งเเตกต่างกัน นำไปใส่ถุง 7 ถุง โดยเเต่ละเเท่งจะใส่ถุงไหนก็ได้  แต่ห้ามใส่ตู้เดียวกันทั้ง 5 เเท่ง ได้กี่วิธี", answer: 16800 }, 
    { problem: "มีหนังสือ 6 วิชาที่แตกต่างกัน วิชาละ 1 เล่ม ต้องการนำทั้ง 6 เล่มมาเรียงกัน ได้กี่วิธี", answer: 2720 }, 
    { problem: "นำเลขโดด 0-5 มาสร้างเป็นจำนวนเต็มบวกที่มี 4 หลัก และหารด้วย 5 ลงตัว โดยเลขซ้ำกันได้ ได้กี่จำนวน", answer: 360 }, 
    { problem: "นำตัวอักษรทั้งหมดจากคำว่า odyssey มาเรียงสับเปลี่ยนโดยพยัญชนะที่เหมือนกันอยู่ติดกัน ได้กี่วิธี", answer: 120 }, 
    { problem: "ข้อสอบแบบ ก-ง จำนวน 10 ข้อ แบบถูก - ผิด จํานวน 5 ข้อ จะมีรูปแบบการทําข้อสอบนี้ทุกข้อได้ทั้งหมดกี่รูปแบบ ตอบใน format ประมาณนี้ (6⁹)(4²⁰)", answer: "(4¹⁰)(2⁵)" }, 
    { problem: "ถ้าผู้กำกับต้องการเลือกนักเเสดง 1 คนเป็นหัวหน้าของกลุ่มนักเเสดงจากนักเเสดงชาย 14 คน และนักเเสดงหญิง 12 คน จะมีวิธีทั้งหมดเท่ากับเท่าไร", answer: 26 }, 
    { problem: "ต้องการแจกหนังสือ 7 เล่ม ให้กับนักเรียนจํานวน 5 คน โดยที่ทั้ง 5 คน จะต้องได้หนังสือเเต่ละเล่มเเตกต่างกัน จะสามารถแจกได้ทั้งหมดกี่วิธี", answer: 2520 }, 
    { problem: "ถ้านําตัวเลข 1-7 ในการสร้างรหัส 6 หลัก หรือ 7 หลัก โดยที่แต่ละหลักใช้ตัวเลขไม่ซ้ํากัน สามารถสร้างได้กี่จำนวน", answer: 10080 }, 
    { problem: "จิ๊กซอว์ต้องการไปมาเลเซีย โดยเดินทางด้วยรถไฟได้ 8 ขบวนหรือเครื่องบิน 5 เที่ยว เเล้วต่อด้วยรถยนต์ 7 คัน หรือมอเตอร์ไซค์ 9 คัน จะมีวิธีการเดินทางไปมาเลเซียได้กี่วิธี", answer: 206 }, 
    { problem: "ดิสนีย์เดินทางไปคาเฟ่ เเต่ต้องแวะร้านสะดวกซื้อก่อนจะไปถึงคาเฟ่ โดยจากบ้านไปร้านสะดวกซื้อได้ 7 เส้นทาง เเละจากร้านสะดวกซื้อไปคาเฟ่ 4 เส้นทาง จะมีวิธีเดินทางไป – กลับ จากบ้านไปคาเฟ่โดยผ่านร้านสะดวกซื้อได้กี่วิธี", answer: 56 }, 
    { problem: "เลขโดด 0-5 จะสร้างเลข 4 หลักที่เป็นจํานวนคี่ โดยเลขแต่ละหลักซ้ํากันได้ จะได้ทั้งหมดกี่จํานวน", answer: 648 }, 
    { problem: "เลขโดด 0-6 จะสร้างเลข 4 หลักที่เป็นจํานวนคู่ โดยเลขแต่ละหลักซ้ํากันไม่ได้ จะได้ทั้งหมดกี่จํานวน", answer: 480 },
  ];
  
  
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(Math.floor(Math.random() * questions.length));
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [punishment, setPunishment] = useState<string | null>(null);

  const punishments = [
    "กระโดดตบ 5 ครั้ง",
    "ทำ Push-up 5 ครั้ง",
    "ทำ Squats 5 ครั้ง",
    "ดึงไม้เพิ่มอีก 1 อันพร้อมกัน",
    "ดึงไม้เพิ่มอีก 2 อันพร้อมกัน",
    "ดึงไม้เพิ่มอีก 1 อัน",
    "ดึงไม้เพิ่มอีก 2 อัน",
    "Moon walk พร้อมพูด hee hee",
    "ไม่ต้องมีบทลงโทษ ชีวิตเจ้าอนาถพอแล้ว",
    "plank 10 second",
    "วิ่งรอบห้อง 1 รอบ",
    "วิ่งรอบห้อง 2 รอบ",       
  ];

  const handleAnswerSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (parseInt(userAnswer) === correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
      setPunishment(punishments[Math.floor(Math.random() * punishments.length)]);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswerCorrect(null);
    setPunishment(null);
    setUserAnswer('');
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
    
  };

  return (
    <div className="container">
      <div className="content">
        <h1>คำถามคณิตศาสตร์</h1>
        <div>
          <p>{questions[currentQuestionIndex].problem}</p>

          {isAnswerCorrect === null ? (
            <div className="input-box">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="กรอกคำตอบ"
              />
              <button onClick={handleAnswerSubmit}>ยืนยันคำตอบ</button>
            </div>
          ) : (
            <div>
              {isAnswerCorrect ? (
                <p className="correct-answer">คำตอบถูกต้อง! 🎉</p>
              ) : (
                <div>
                  <p className="incorrect-answer">คำตอบผิด! 😥</p>
                  <p>บทลงโทษ: {punishment}</p>
                </div>
              )}
              <button onClick={handleNextQuestion}>ถามคำถามถัดไป</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
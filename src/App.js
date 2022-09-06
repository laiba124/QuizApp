import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Pakistan?',
			answerOptions: [
				{ answerText: 'Karachi', isCorrect: false },
				{ answerText: 'Lahore', isCorrect: false },
				{ answerText: 'Multan', isCorrect: false },
				{ answerText: 'Islamabad', isCorrect: true },
			],
		},
		{
			questionText: 'What is the meaning of Pakistan?',
			answerOptions: [
				{ answerText: 'Muslim Land', isCorrect: false },
				{ answerText: 'Land of the pure', isCorrect: true },
				{ answerText: 'Desert', isCorrect: false },
				{ answerText: 'Holy Land', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the national language of Pakistan?',
			answerOptions: [
				{ answerText: 'Urdu', isCorrect: true },
				{ answerText: 'Bengali', isCorrect: false },
				{ answerText: 'Hindi', isCorrect: false },
				{ answerText: 'Tamil', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the national bird of Pakistan?',
			answerOptions: [
				{ answerText: 'Eagle', isCorrect: false },
				{ answerText: 'Crow', isCorrect: false },
				{ answerText: 'Chakor', isCorrect: true },
				{ answerText: 'Peacock', isCorrect: false },
			],
      
		}, 
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
 
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
 			setShowScore(true);
		}
	};
	return (
		<div className='app'>
      <div class="card-body py-5">
          <h5 class="card-title">Question</h5>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>	 
          <div className="question-section">
                    <div className="question-count">
                    <span>Question  {currentQuestion + 1}</span>/{questions.length}
                  </div>
                   <div className="question-text">                  
                    {questions[currentQuestion].questionText}
                   </div>
                   <br />
               </div>
          <div className='answer-section'>
 					{questions[currentQuestion].answerOptions.map((answerOption) => (
							<><button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="btn btn-block btn-primary" >{answerOption.answerText}</button><br/><br/></>
						))}
					</div>  
					 
				</>
			)}
		</div></div>
	);
} 

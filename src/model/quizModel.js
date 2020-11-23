class QuizModel {
    constructor() {
        this.questions = [
            {
                questionText: "What year is it today?",
                answerOptions: [
                    { answerText: '2020', isCorrect: true },
                    { answerText: '2019', isCorrect: false },
                    { answerText: '2000', isCorrect: false },
                ]
            }
        ];
        this.score = 0;
        this.subscribers = [];
    }

    setScore(point) {
        this.score = point;
    }

    addObserver(obs) {
        this.subscribers = this.subscribers.concat(obs);
    }

}

export default QuizModel;
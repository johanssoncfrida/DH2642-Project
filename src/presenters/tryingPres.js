import TryingView from '../views/tryingView'

function TryingPres ({text}) {
    const score = text.score;
    const questions = text.questions;

    return TryingView({score, setScore: s => text.setScore(s), questions});
}

export default TryingPres;
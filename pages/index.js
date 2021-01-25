import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Saga Dark Souls Quizz </h1>
          </Widget.Header>
          <Widget.Content>
            <p>as</p>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <p>ola</p>
          </Widget.Content>
        </Widget>

        <Footer/>
        <GitHubCorner projectUrl='https://github.com/alura-challenges/aluraquiz-base/blob/main/src/components/GitHubCorner/index.js'/>
      </QuizContainer>
    </QuizBackground>

  )
}

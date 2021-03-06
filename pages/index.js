import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'


const BackgroundImage = styled.div`
background-image:url(${db.bg});
flex:1;
background-size:cover;
background-position:center;

`;

export const QuizContainer = styled.div`
width:100%;
max-width:350px;
padding-top:45px;
margin: auto 10%;
@media screen and (max-width:500){
  margin: auto;
  padding:15px;
}
`;




export default function Home() {
  return (

    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Header> <h1>Zelda</h1></Widget.Header>
          <Widget.Content><p>loren</p></Widget.Content>
        </Widget>


        <Widget>
          <Widget.Header> <h1>Zelda</h1></Widget.Header>
          <Widget.Content><p>loren</p></Widget.Content>
        </Widget>

        <Widget>
          <Footer />
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/moraes3000' />

    </QuizBackground>
  )
}

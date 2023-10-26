import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
   <Container>
      <Header title="Autor" />
      <Section
         title="O autorze"
         body={<p>Jestem Andrii Stafiniak i pasjonuję się programowaniem. Dzięki kursowi YouCode, zebrałem niezbędną wiedzę, aby stworzyć tę stronę. Kod źródłowy, oraz inne moje projekty znajdziesz w moim <a href="https://github.com/AndriiStafiniak" target="_blank" rel="noreferrer">repozytorium na GitHub.</a> 😃</p>}
      />
   </Container>
)


export default AuthorPage;
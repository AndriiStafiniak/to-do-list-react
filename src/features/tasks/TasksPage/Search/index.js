import { useLocation, useHistory } from "react-router-dom"
import { InputStyled } from "../../Input/styled"
import { Wrapper } from "./styled"

const Search = () => {
   const searhQueryParamName = "szukaj"
   const location = useLocation();
   const history = useHistory();
   const query = (new URLSearchParams(location.search)).get(searhQueryParamName);

   const onInputChange = ({ target }) => {
      const searchParams = new URLSearchParams(location.search);

      if (target.value.trim() === "") {
         searchParams.delete(searhQueryParamName);
      } else {
         searchParams.set(searhQueryParamName, target.value)
      }
      history.push(`${location.pathname}?${searchParams.toString()}`);
   };
   return (
      <Wrapper>
         <InputStyled
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
         />
      </Wrapper>
   )
}
export default Search;
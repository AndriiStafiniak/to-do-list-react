import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters"
import { InputStyled } from "../../Input/styled"
import { Wrapper } from "./styled"

const Search = () => {
   const searhQueryParamName = "szukaj";
   const query = useQueryParameter(searhQueryParamName);
   const replaceQueryParameter = useReplaceQueryParameter();

   const onInputChange = ({ target }) => {
      replaceQueryParameter({
         key: searhQueryParamName,
         value: target.value.trim() !== "" ? target.value : undefined,
      });
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
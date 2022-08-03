import { useCallback, useState } from "react";
import Select from "components/Select";
import { useFetch } from "hooks/useFetch";
import { Product } from "types/Product";
import { FlexBox } from "react-styled-flex";
import * as Styled from "./styled";

const BASE_URL = "https://dummyjson.com/products/search?q=";

type Response = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

const getOptionLabel = ({ title }: Product) => title;
const getOptionValue = ({ id }: Product) => id.toString();

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const { data, error, isLoading } = useFetch<Response>(
    `${BASE_URL}${inputValue}`
  );

  const handleInputChange = useCallback(
    (value: string) => setInputValue(value),
    []
  );

  if (error) {
    return <Styled.ErrorText>{error.message}</Styled.ErrorText>;
  }

  return (
    <FlexBox margin="100px" width="40%">
      <Select
        isLoading={isLoading}
        onInputChange={handleInputChange}
        options={data?.products}
        placeholder="Select value"
        onSelect={console.log}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
      />
    </FlexBox>
  );
};

export default App;

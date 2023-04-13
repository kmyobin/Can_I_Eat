import React from "react";
import styled from "styled-components";
import magnifyImg from '../../assets/images/magnify.png';
import axios from "axios";

const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  width: 40%;
  height: 600px;
`;

const SearchHeading = styled.h1`
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  margin: 0;
  
  font-size: 36px;
  font-family: NotoSansKR-700;
  font-weight: 500;
  text-align: center;
  line-height: 140px;
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 55px;
  border: none;
  border-radius: 15px;
  background-color: #F5F5F5;
  background-image: url(${magnifyImg});
  background-position: left 10px center;
  background-repeat: no-repeat;
  padding-left: 30px;
`;
const SearchButton = styled.button`
  box-sizing: border-box;
  width: 351px;
  height: 50px;
  background:#00B578;
  border: none;
  border-radius: 4px;
  
  font-size: 18px;
  font-family: NotoSansKR-700;
  font-weight: 500;
  color: #fff;
`;
function SearchForm({handleSearchKeywordChange, searchKeyword, handleSearchResultsChange} : SearchFormProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchKeywordChange(event.target.value);
    }
    const handleFetch = async () => {
        const response =  await axios.get(`http://openapi.foodsafetykorea.go.kr/api/a8b59a63ce2040ccb118/C002/json/1/100/PRDLST_NM=${searchKeyword}`);
        handleSearchResultsChange(response.data.C002.row);
    }

    return (
        <SearchFormWrapper>
            <SearchHeading>
                이제 식품을 검색해주세요!
            </SearchHeading>
            <SearchInput
                onChange={handleChange}
                placeholder={"원하는 식품을 입력해주세요."}
            />
            <SearchButton
                onClick={handleFetch}
            >
                검색
            </SearchButton>
        </SearchFormWrapper>
    );
}

export default SearchForm;

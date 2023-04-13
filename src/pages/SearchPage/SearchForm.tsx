import React from "react";
import styled from "styled-components";

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
  background: #F5F5F5;
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

function SearchForm() {
    return (
        <SearchFormWrapper>
            <SearchHeading>
                이제 식품을 검색해주세요!
            </SearchHeading>
            <SearchInput>

            </SearchInput>
            <SearchButton>
                검색
            </SearchButton>
        </SearchFormWrapper>
    );
}

export default SearchForm;

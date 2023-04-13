import React from "react";
import styled from "styled-components";

const SearchListWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 600px;
`;
const SearchScrollBox = styled.div`
  width: 80%;
  height: 100%;
  padding-right: 20px;
  overflow-y: scroll;

  /* 스크롤바 너비 조정 */
  ::-webkit-scrollbar {
    width: 6.5px;
  }
  /* 스크롤바 현재 위치 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #00B57840;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #00B578;
  }
  /* 스크롤바 전체 부분 */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ddd;
  }
`;
const SearchItem = styled.div`
  width: 100%;
  height: 68px;
  margin-bottom: 25px;
  background: #F5F5F5;
  border-radius: 10px;
`;

function SearchList() {
    return (
        <SearchListWrapper>
            <SearchScrollBox>
                <SearchItem>

                </SearchItem>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
            </SearchScrollBox>
        </SearchListWrapper>
    );
}

export default SearchList;

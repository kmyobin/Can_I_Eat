import React, {useEffect} from "react";
import styled from "styled-components";
import SearchItem from "./SearchItem";
import {Skeleton} from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  width: 60%;
  height: 600px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  };
`;
const SearchScrollBox = styled.div<SearchScrollBoxProps>`
  display: ${({ isResultExists }) => (isResultExists ? 'block' : 'none')};;
  
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

function SearchList({searchResults, isLoading} : SearchListProps) {
    useEffect(() => {
    },[searchResults]);

    return (
        <Wrapper>
            {
                isLoading ?
                    <Skeleton active style={{ width: '80%' }} paragraph={{ rows: 18 }} />
                    :
                    <SearchScrollBox isResultExists = {searchResults.length !== 0}>
                        {searchResults.map((item: SearchResult) =>
                            <SearchItem
                                key = {item.PRDLST_REPORT_NO}
                                id = {item.PRDLST_REPORT_NO}
                                imgUrl = {item.IMG_URL}
                                name={item.PRDLST_NM}
                                company={item.BSSH_NM}
                            />)}
                    </SearchScrollBox>
            }
        </Wrapper>
    );
}

export default SearchList;

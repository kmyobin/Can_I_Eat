import React from "react";
import styled from "styled-components";

const SearchItemWrapper = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 68px;
  margin-bottom: 25px;
  background: #F5F5F5;
  border-radius: 10px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchItemInfo = styled.div`
  height: 40px;
`
const SearchItemImage = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 20px;
  background: tomato;
  border-radius: 50%;
`;
const SearchItemName = styled.div`
  height: 20px;
  font-size: 17px;
  font-weight: 400;
`
const SearchItemCompany = styled.div`
  height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: #999;
`;

function SearchItem() {
    return (
        <SearchItemWrapper>
            <SearchItemImage/>
            <SearchItemInfo>
                <SearchItemName>
                    GFS 우리집 도시락 제육볶음 정식
                </SearchItemName>
                <SearchItemCompany>
                    (주) 굿푸드 시스템템
                </SearchItemCompany>
            </SearchItemInfo>
        </SearchItemWrapper>
    );
}

export default SearchItem;

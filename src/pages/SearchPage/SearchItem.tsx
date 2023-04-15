import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 68px;
  margin-bottom: 25px;
  background: #F5F5F5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  text-decoration: none;
  color: inherit;

  @media only screen and (max-width: 768px) {
    width: 288px;
    height: 56px;
  };
`;
const SearchItemInfo = styled.div`
  height: 40px;
`;
const SearchItemImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 20px;
  background-image: url(${props => props.src});
  border-radius: 50%;
`;
const SearchItemName = styled.div`
  height: 20px;
  
  font-size: 17px;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  };
`;
const SearchItemCompany = styled.div`
  height: 20px;
  
  font-size: 13px;
  font-weight: 400;
  color: #999;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  };
`;

function SearchItem({id, name, company, imgUrl} : SearchItemProps) {
    return (
        <Wrapper to ={`/result/${id}`}>
            <SearchItemImage src={imgUrl}/>
            <SearchItemInfo>
                <SearchItemName>
                    {name}
                </SearchItemName>
                <SearchItemCompany>
                    {company}
                </SearchItemCompany>
            </SearchItemInfo>
        </Wrapper>
    );
}

export default SearchItem;

import React, {memo, useState} from "react";
import styled from "styled-components";
import magnifyImg from '../../assets/images/magnify.png';
import axios from "axios";
import {makeFoodImgURL, makeFoodRawMaterialURL} from "../../utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  width: 40%;
  height: 600px;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;
const SearchHeading = styled.h1`
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  margin: 0;
  
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  line-height: 140px;

  @media only screen and (max-width: 768px) {
    width: 391px;
    font-size: 20px;
  }
  
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

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 40px;
    font-size: 12px;
  }
`;
const SearchButton = styled.button`
  box-sizing: border-box;
  width: 351px;
  height: 50px;
  background:#00B578;
  border: none;
  border-radius: 4px;
  
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  
  cursor: pointer;
  
  &:disabled {
    opacity: 30%;
    cursor: initial;
  }

  @media only screen and (max-width: 768px) {
    width: 65px;
    height: 25px;
    font-size: 12px;
  }
`;

const SearchHeadingWrapper = memo(() => {
    return <SearchHeading>이제 식품을 검색해주세요!</SearchHeading>
});

function SearchForm({handleSearchResultsChange, handleIsLoadingToggle} : SearchFormProps) {
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const handleSearchKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    }
    const handleSearchResultsFetch = async () => {
        handleIsLoadingToggle();
        try {
            const {data:{C002:{row}}} =  await axios.get(makeFoodRawMaterialURL(process.env.REACT_APP_RAW_MATERIAL_KEY, searchKeyword));
            // 원재료 API 에서 가져온 데이터의 수와 상관없이 이미지 API 를 일괄적으로 한번만 호출 한다.(axios.all)
            const ids = row.map(({PRDLST_REPORT_NO}: SearchResult) => PRDLST_REPORT_NO);
            const images = await axios.all(ids.map((id:string) => axios.get(makeFoodImgURL(process.env.REACT_APP_FOOD_IMAGE_KEY, id))));
            const imgUrls = images.map(({data:{body:{items:[first]}}}:any)=> first?.item.imgurl1);
            const results = row.map((item:SearchResult, index:number) => ({...item, IMG_URL: imgUrls[index]}));
            handleSearchResultsChange(results);
        } catch (e) {
            // 데이터가 없을시 Array.map()으로 인한 TypeError 가 발생되는 경우를 처리하기 위함.
            if (e instanceof TypeError) {
                handleSearchResultsChange([]);
                console.log('TypeError가 발생했습니다:', e.message);
            }
        }
        handleIsLoadingToggle();
    }

    return (
        <Wrapper>
            <SearchHeadingWrapper/>
            <SearchInput
                onChange={handleSearchKeywordChange}
                placeholder={"원하는 식품을 입력해주세요."}
            />
            <SearchButton
                onClick={handleSearchResultsFetch}
                disabled={searchKeyword === ""}
            >
                검색
            </SearchButton>
        </Wrapper>
    );
}

export default SearchForm;

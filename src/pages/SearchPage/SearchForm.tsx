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
  
  cursor: pointer;
  
  &:disabled {
    opacity: 30%;
    cursor: initial;
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
            const ids = row.map(({PRDLST_REPORT_NO}: SearchResult) => PRDLST_REPORT_NO);
            const images = await axios.all(ids.map((id:string) => axios.get(makeFoodImgURL(process.env.REACT_APP_FOOD_IMAGE_KEY, id))));
            const imgUrls = images.map(({data:{body: items}}:any)=> items[0]?.item.imgurl1);
            const results = row.map((item:SearchResult, index:number) => ({...item, IMG_URL: imgUrls[index]}));
            handleSearchResultsChange(results);
        } catch (e) {
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

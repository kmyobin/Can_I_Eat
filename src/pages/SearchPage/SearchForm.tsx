import React from "react";
import styled from "styled-components";
import magnifyImg from '../../assets/images/magnify.png';
import axios from "axios";

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

function SearchForm({handleSearchKeywordChange, searchKeyword, handleSearchResultsChange, handleIsLoadingToggle} : SearchFormProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchKeywordChange(event.target.value);
    }
    const handleFetch = async () => {
        handleIsLoadingToggle();
        try {
            const response =  await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_RAW_MATERIAL_KEY}/C002/json/1/30/PRDLST_NM=${searchKeyword}`);
            const ids = response.data.C002.row.map((item: SearchResult) => item.PRDLST_REPORT_NO);
            const images = await axios.all(ids.map((id:string) => axios.get(`https://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${process.env.REACT_APP_FOOD_IMAGE_KEY}&prdlstReportNo=${id}&returnType=json`)));
            const imgUrls = images.map((item:any)=> item.data.body.items[0]?.item.imgurl1);
            const results = response.data.C002.row.map((item:SearchResult, index:number) => ({...item, IMG_URL: imgUrls[index]}));
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
            <SearchHeading>
                이제 식품을 검색해주세요!
            </SearchHeading>
            <SearchInput
                onChange={handleChange}
                placeholder={"원하는 식품을 입력해주세요."}
            />
            <SearchButton disabled={searchKeyword === ""}
                onClick={handleFetch}
            >
                검색
            </SearchButton>
        </Wrapper>
    );
}

export default SearchForm;

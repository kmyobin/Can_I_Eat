const IMAGES_PATH = "/images"; //../../assets/images";

const 계란 = `${IMAGES_PATH}/계란.png`;
const 돼지고기 = `${IMAGES_PATH}/돼지고기.png`;
const 게 = `${IMAGES_PATH}/게.png`;
const 고등어 = `${IMAGES_PATH}/고등어.png`;
const 닭고기 = `${IMAGES_PATH}/닭고기.png`;
const 오징어 = `${IMAGES_PATH}/오징어.png`;
const 소고기 = `${IMAGES_PATH}/소고기.png`;
const 새우 = `${IMAGES_PATH}/새우.png`;
const 우유 = `${IMAGES_PATH}/우유.png`;
const 호두 = `${IMAGES_PATH}/호두.png`;
const 잣 = `${IMAGES_PATH}/잣.png`;
const 대두 = `${IMAGES_PATH}/대두.png`;
const 복숭아 = `${IMAGES_PATH}/복숭아.png`;
const 토마토 = `${IMAGES_PATH}/토마토.png`;
const 아황산류 = `${IMAGES_PATH}/아황산류.png`;
const 굴 = `${IMAGES_PATH}/굴.png`;
const 밀 = `${IMAGES_PATH}/밀.png`;
const 메밀 = `${IMAGES_PATH}/메밀.png`;
const 전복 = `${IMAGES_PATH}/전복.png`;
const 홍합 = `${IMAGES_PATH}/홍합.png`;
const 땅콩 = `${IMAGES_PATH}/땅콩.png`;
const 조개류 = `${IMAGES_PATH}/조개류.png`;
const 비건 = `${IMAGES_PATH}/비건.png`;
const 당뇨병 = `${IMAGES_PATH}/당뇨병.png`;
const 영유아 = `${IMAGES_PATH}/영유아.png`;
const 힌두교 = `${IMAGES_PATH}/힌두교.png`;

export const selectArray = [
  /*{
    id: 1,
    name: "힌두교",
    src: 힌두교,
    alt: "힌두교",
  },
  {
    id: 2,
    name: "영유아",
    src: 영유아,
    alt: "영유아",
  },
  {
    id: 3,
    name: "당뇨병",
    src: 당뇨병,
    alt: "당뇨병",
  },
  {
    id: 4,
    name: "비건",
    src: 비건,
    alt: "비건",
  },*/
  {
    id: 5,
    name: "조개류",
    src: 조개류,
    alt: "조개류",
    types: ["조개", "굴", "전복", "홍합", "갑각류"],
  },
  {
    id: 6,
    name: "땅콩",
    src: 땅콩,
    alt: "땅콩",
    types: ["아몬드", "땅콩"],
  },
  {
    id: 7,
    name: "홍합",
    src: 홍합,
    alt: "홍합",
    types: ["홍합"],
  },
  {
    id: 8,
    name: "전복",
    src: 전복,
    alt: "전복",
    types: ["전복", "조개", "패류"],
  },
  {
    id: 9,
    name: "메밀",
    src: 메밀,
    alt: "메밀",
    types: ["메밀"],
  },
  {
    id: 10,
    name: "밀",
    src: 밀,
    alt: "밀",
    types: ["밀", "글리아딘", "글루텐", "빵"],
  },
  {
    id: 11,
    name: "굴",
    src: 굴,
    alt: "굴",
    types: ["굴", "조개"],
  },
  {
    id: 12,
    name: "아황산류",
    src: 아황산류,
    alt: "아황산류",
    types: ["아황산"],
  },
  {
    id: 13,
    name: "토마토",
    src: 토마토,
    alt: "토마토",
    types: ["토마토", "글루타마산"],
  },
  {
    id: 14,
    name: "복숭아",
    src: 복숭아,
    alt: "복숭아",
    types: ["복숭아"],
  },
  {
    id: 15,
    name: "대두",
    src: 대두,
    alt: "대두",
    types: ["대두"],
  },
  {
    id: 16,
    name: "잣",
    src: 잣,
    alt: "잣",
    types: ["잣"],
  },
  {
    id: 17,
    name: "호두",
    src: 호두,
    alt: "호두",
    types: ["호두", "견과류"],
  },
  {
    id: 18,
    name: "우유",
    src: 우유,
    alt: "우유",
    types: [
      "인공버터향",
      "버터",
      "카제인",
      "치즈",
      "커드",
      "크림",
      "커스터드",
      "푸딩",
      "락트알부민",
      "락토글로불린",
      "누가",
      "사워크림",
      "요거트",
      "흑설탕향료",
      "캐러멜향료",
      "초콜릿",
      "마가린",
      "고단백가루",
      "천연향료",
      "유당",
      "유청",
    ],
  },
  {
    id: 19,
    name: "새우",
    src: 새우,
    alt: "새우",
    types: ["새우", "갑각류"],
  },
  {
    id: 20,
    name: "소고기",
    src: 소고기,
    alt: "소고기",
    types: ["소고기", "비프", "우육", "쇠고기"],
  },
  {
    id: 21,
    name: "오징어",
    src: 오징어,
    alt: "오징어",
    types: ["오징어"],
  },
  {
    id: 22,
    name: "닭고기",
    src: 닭고기,
    alt: "닭고기",
    types: ["닭"],
  },
  {
    id: 23,
    name: "고등어",
    src: 고등어,
    alt: "고등어",
    types: ["히스타민", "고등어"],
  },
  {
    id: 24,
    name: "게",
    src: 게,
    alt: "게",
    types: ["게", "갑각류"],
  },
  {
    id: 25,
    name: "돼지고기",
    src: 돼지고기,
    alt: "돼지고기",
    types: ["돼지"],
  },
  {
    id: 26,
    name: "계란",
    src: 계란,
    alt: "계란",
    types: ["계란", "달걀", "가금류", "난류", "알류"],
  },
];

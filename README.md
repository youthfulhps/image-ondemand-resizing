## AWS Lambda@Edge에서 최적화된 이미지 전달받기 위한 인프라 구성

---

## Why

이미지 최적화에 신경쓰지 않으면 사용자 경험 지표에서 많은 감점을 받기 쉽다. LightHouse 기준, 적절한 이미지 사이즈 사용과 next-gen 포멧 이미지 사용에 대한 개선 방향을 제시받게 된다.

`Properly size images`

`Serve images in next-gen formats`

사용자 경험 지표를 개선하고 플랫폼 친화적인 이미지를 응답받기 위한 인프라 구성을 진행한다.

## How to Implement

https://youthfulhps.github.io/aws-lambda-edge%EC%97%90%EC%84%9C-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%A0%84%EB%8B%AC%EB%B0%9B%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%9D%B8%ED%94%84%EB%9D%BC-%EA%B5%AC%EC%84%B1

## How to Test

ex) http://localhost:3000/?w=200&h=200&q=fill&webp=true

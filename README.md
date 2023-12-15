## 프로젝트 소개
- 타자연습 게임을 모방하여 만든 간단한 게임입니다. 제시된 단어를 모두 입력하면 게임이 끝납니다.
<br>

## 팀원
- 김주찬
- 김지관
- 이규리
<br>

## 협업 방식
Git
<br>

## 사용 라이브러리
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
- tailwindcss
<img src=["https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1702607357431?alt=media&token=e04dc1c0-111b-49f7-9afa-f6210da1b168"](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1702607357431?alt=media&token=e04dc1c0-111b-49f7-9afa-f6210da1b168)
<br>

## 핵심 기능 및 구현 방법
- 제시된 단어를 화면에 렌더링
- 입력받은 단어가 제시된 단어와 일치하면 제시된 단어가 호박 이미지로 변경됨
- 모든 단어를 입력하면 게임을 다시 하거나 끝낼 수 있음
- useContext
- spin
- useState
<br>

## 트러블 슈팅
1. 문제 : 한글 키워드 입력시 마지막 글자가 한번더 출력되는 문제가 발생 <br>
   문제 원인 : 한글의 경우 자음과 모음의 조합으로 한 음절이 만들어지는 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지를 알 수 없기 때문<br>
   해결 : 입력 문자가 조합 문자인지 아닌지를 boolean값으로 변환하는 함수인 event.isComposing 으로  false때만 출력되게 해서 해결<br>
<br>

## 재사용


<br>

## 후기
- 김주찬 : git 활용하여 각자 기능을 개발하고 합치는 연습을 할 수 있어서 좋았습니다.
- 김지관 :
- 이규리 : 

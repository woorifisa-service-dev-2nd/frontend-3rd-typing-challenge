## 프로젝트 소개
- 타자연습 게임을 모방하여 만든 간단한 게임입니다. 제시된 단어를 모두 입력하면 게임이 끝납니다.
<br>
<img width="800" alt="첨부1" src="https://github.com/woorifisa-service-dev-2nd/frontend-3rd-typing-challenge/assets/151590254/52c195c9-623e-4b7b-a058-e3db12fbb6f9">
<img width="800" alt="첨부2" src="https://github.com/woorifisa-service-dev-2nd/frontend-3rd-typing-challenge/assets/151590254/e19f9826-b084-4289-be6b-04159d6db237">
<img width="800" alt="모달1" src="https://github.com/woorifisa-service-dev-2nd/frontend-3rd-typing-challenge/assets/151590254/82b09e34-bb47-4bc6-b8c8-e838f183a721">
<img width="800" alt="모달2" src="https://github.com/woorifisa-service-dev-2nd/frontend-3rd-typing-challenge/assets/151590254/796ddd07-a5d2-4734-9f82-13ffb38643f7">


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
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/>

<br>

## 기능
- 제시된 단어를 화면에 렌더링합니다.
- 입력받은 단어가 제시된 단어와 일치하면 제시된 단어가 호박 이미지로 변경됩니다.
- 모든 단어를 입력하면 게임을 다시 하거나 끝낼 수 있습니다.
- 강의에서 배운 useContext , useReducer 사용하여 모든 컴포넌트에서 게임 데이터, 함수에 쉽게 접근할 수 있습니다.

<br>

## 트러블 슈팅
1. 문제 : 한글 키워드 입력시 마지막 글자가 한 번 더 출력되는 문제가 발생 <br>
   문제 원인 : 한글의 경우 자음과 모음의 조합으로 한 음절이 만들어지는 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지를 알 수 없기 때문<br>
   해결 : 입력 문자가 조합 문자인지 아닌지를 boolean값으로 변환하는 함수인 event.isComposing 으로  false때만 출력되게 해서 해결<br>

```js
const keyboardDownHandloer = (e) => {
     if (e.nativeEvent.isComposing) return;
     if (e.code === "Enter" || e.keyCode === 13) {
      checkWord(inputRef.current.value);
     }
};
```

<br>

## 재사용
1. 버튼

```js
const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`${
        className ? className : ""
      } bg-gray-600 hover:bg-gray-500 text-white font-bold border-b-4 border-gray-800 hover:border-gray-600 rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```
<br>

```js
<Button className={"p-4"} onClick={onClickStart}>
            시작 버튼
          </Button>
```

2. 모달

```js
const Modal = ({ children, onClose }) => {
  return (
    <>
      <div
        data-cy="modal-backdrop"
        className="fixed top-0 ..."
        onClick={onClose}
      ></div>
      <div className="fixed z-10 ...">
        {children}
      </div>
    </>
  );
};
```

<br>

```js
<Modal>
 <div className="w-full h-full ...">
   <h1 className="text-5xl">다시 입력하세요</h1>
 </div>
</Modal>,
```


<br>

## 후기
- 김주찬 : git 활용하여 각자 기능을 개발하고 합치는 연습을 할 수 있어서 좋았습니다.
- 김지관 : 이번 과제를 구현하면서 수업시간에 배운 React Hook을 전부 활용하여 만드는 과정에서 부족했던 개념들을 다시 복습하여 많은 도움이 되었습니다.
- 이규리 : 강의에서 배우는 것과 직접 구현하는 것은 굉장히 다르다는 것을 느꼈습니다. 좋은 팀원들을 만나 git, hook에 대해 많이 익힐 수 있었습니다.

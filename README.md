# CONFIG2GRAPH

## 소개
yaml, json 등 파일을 다양한 Graph로 그려주는 vscode extension.

## 목적 
- vscode extension webview 사용 
- d3 라이브러리를 통해 그래프 생성 
- 사용자가 open한 json 파일 파싱 후 그래프 생성 

## 설치 방법

1. 리포지토리를 클론합니다:
```bash
git clone https://github.com/shin-gyeongseon/configfile2graph.git
```

2. 루트 디렉토리에서 의존성을 설치합니다:
```bash
cd configfile2graph
npm install
```

3. src/web 디렉토리로 이동하여 React 패키지의 의존성을 설치합니다:

```bash
cd src/web
npm install
```

4. 프로젝트를 VSCode에서 열고, 확장 프로그램 개발 호스트를 시작합니다:
    F5 키를 눌러 확장 프로그램을 실행합니다.


## 결과 
- webview 표현했습니다. 
- d3 샘플 코드를 사용했습니다. 
- json parsing은 했지만 원하는 그래프로 구현하지 못했습니다. 


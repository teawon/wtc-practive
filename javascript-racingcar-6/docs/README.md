## 기능 요구 사항

## 자동차

- [ ] 이름을 가진다
  - [ ] 이름은 5자 이하여야한다
- [ ] 현재 위치를 가지고 있다
- [ ] 0~9사이의 무작위 값을 계산한다
- [ ] 4이상의 값이 무작위 값에서 나왔다면 위치를 한칸 전진시킨다.

## 경기

- [ ] 경기에 출전하는 자동차 정보를 가지고 있다
- [ ] 경기 시도 횟수를 가지고 있다
- [ ] 참여한 자동차들에 대해 각각 이동을 시도한다
- [ ] 우승자 정보를 반환한다
  - [ ] 여러명일 수 있으므로 배열형태로 반환한다
- [ ] 전체 경기의 진행상황을 반환한다

## 전체 흐름

- [ ] 자동차 이름 입력받기
  - [ ] 입력 예외처리
- [ ] 시도 횟수 입력받기
- [ ] 게임을 시도하고, 결과값 가져오기
- [ ] 최종 우승자 출력하기

<!-- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다. -->

### 실행 예시

경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
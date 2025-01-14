# 🧠DynamicProgramming (A.K.A DP)

> DynamicProgramming, DP, 동적 계획법

- ### 🧩개념
  - 간단한 문제로 분리하여 부분의 문제들을 해결함으로써 최종적으로 복잡한 문제의 답을 구하는 방법을 뜻한다.
- ### 👀특징
  - 자주 나오는 알고리즘 문제이며 범위가 워낙 넓다.

---

# 📌핵심 이론

- 큰 문제를 작은 문제로 나눠야한다.
  - 점화식(재귀식)으로 풀어낼 수 있다.
- 작은 문제들이 반복돼 나타나고 사용되며 작은 문네들의 결괏값은 항상 같아야 한다. [[링크](https://ko.wikipedia.org/wiki/%EC%A0%90%ED%99%94%EC%8B%9D "점화식 wiki")]
- 작은 문제들은 한 번만 계산(함수)해서 return해야 한다. DP테이블을 이용한다. 이를 **메모이제이션** 기법 이라고 한다.
  - 시간복잡도 측면에서 유리하다.
  - **메모이제이션**은 **백트래킹** 알고리즘과 유사하다.
- DP는 **톱-다운** 방식과 **바텀-업** 방식으로 구현 할 수 있다.

---

# 📝문제예시

> - 대표적인 DP가 적용되는 사례 : 피보나치 수열 공식
> - 공식: D[N] = D[N - 1] + D[N - 2]
> - baekjoon: [2747](https://www.acmicpc.net/problem/2747 "2747 baekjoon")

- 문제: 피보나치 수열로 `[1,x,2,y,5,z]` 이루어진 배열 x,y,z를 구하시오. [[링크]("풀이방식")]

# ✍풀이방식

1. DP로 풀수 있는지 확인하기
2. 점화식 세우기
   > 논리적으로 문제를 나누고, 문제간의 **인과 관계**를 파악하는 훈련이 필요하다. [[section9 조합](https://www.inflearn.com/course/lecture?courseSlug=%EB%91%90%EC%9E%87-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%8C%8C%EC%9D%B4%EC%8D%AC&unitId=148402&tab=curriculum "inflean")]
3. 메모제이션 원리 이해하기
   > DP테이블에 저장해 놓는다.
4. 톱-다운 구현 방식 이해하기
   > 위에서부터 문제를 파악해 내려오는 방식, 재귀함수 형태로 코드를 구현 단, 탑다운 방식은 재귀 함수의 형태로 구현 되기에 **재귀**의 깊이가 매우 길어질 경우 **런타임 에러**가 발생 할 수 있다. 이럴 경우 **바턴-업으로 구현, 최적화 필수**

---

# 👨‍💻Summary

> ### 🔥KeyWord
>
> - 점화식
> - 톱-다운, 바텀-업
> - 풀이방식

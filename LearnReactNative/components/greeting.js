import React from 'react';
import {View, Text} from 'react-native';

// 컴포넌트를 선언한다.
// 새로운 컴포넌트를 선언하는 방법은 두 가지가 있다.
// 첫 번째는 함수로 컴포넌트를 선언하는 것이고, 두 번째로는 클래스로 컴포트로 선언하는 것이다.

// 여기서는 함수 형태로 컴포넌트를 만들어 볼 것이며, 이를 함수 컴포넌트라고 부른다.

function Greeting() {
  return (
    <View>
      <Text>
        React Native는 Components 이름을 대문자로 시작해야 하나 봅니다. (파스칼
        케이스로요){' '}
      </Text>
    </View>
  );
}

export default Greeting;
//* 다른 파일에서 이 컴포넌트를 불러올 수 있도록 export 해주었다.

// 함수로 선언한 컴포넌트에서는 이와 같이 XML 형태로 이루어진 내용을 반환해줘야 한다.
// 이러한 문법을 JSX 라고 부른다.

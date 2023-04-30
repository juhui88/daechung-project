import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 예외가 발생하면 상태를 업데이트합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 예외 정보를 서버로 전송하거나 로깅할 수 있습니다.
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러 메시지를 출력합니다.
      return <h1>Something went wrong.</h1>;
    }

    // 자식 컴포넌트를 렌더링합니다.
    return this.props.children; 
  }
}

export default ErrorBoundary;

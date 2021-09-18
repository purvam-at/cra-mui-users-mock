import React from 'react';

interface IErrorState {
  error: any;
}

interface IErrorProps {
  children?: any;
}

class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  constructor(props: IErrorProps) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error: Error | null, info: any) {
    this.logError(error, info);
  }

  render() {
    if (this.state.error) {
      return 'such error'; // as before
    }
    return this.props.children;
  }

  logError(error: Error | null, info: any) {
    console.log(error);
    console.log(info);
  }
}

export default ErrorBoundary;

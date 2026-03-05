import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Game crashed:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center bg-bar-dark">
          <h1 className="text-2xl font-bold text-urgency-red mb-4 uppercase tracking-wider">
            Something Went Wrong
          </h1>
          <p className="text-text-muted text-sm mb-8 max-w-xs leading-relaxed">
            The game encountered an unexpected error. Your progress has been
            saved.
          </p>
          <button
            className="px-8 py-4 bg-tan text-text-dark rounded-lg font-bold uppercase tracking-wider text-sm active:bg-tan-light transition-colors min-h-[44px] cursor-pointer"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.hash = "";
              window.location.reload();
            }}
          >
            Restart
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

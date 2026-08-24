import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center font-google uppercase">
          <div className="max-w-md p-8 rounded-3xl glass-card-luxe border border-white/90 shadow-2xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-pristine-orange flex items-center justify-center mx-auto shadow-sm">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              SOMETHING WENT WRONG
            </h2>
            <p className="text-xs text-gray-600 font-light">
              AN UNEXPECTED APPLICATION ERROR OCCURRED. PLEASE RELOAD THE PAGE TO CONTINUE EXPLORING THE LORD'S.
            </p>
            <button
              onClick={this.handleReload}
              className="btn-pristine-orange w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange"
            >
              <RefreshCw className="w-4 h-4" />
              <span>RELOAD WEBSITE</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

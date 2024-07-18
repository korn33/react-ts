import React, { ErrorInfo, ReactElement, Suspense } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
    children: ReactElement;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <PageError />
                // <Suspense fallback={<div>Loading...</div>}>

                // </Suspense>

        }

        return this.props.children;
    }
}
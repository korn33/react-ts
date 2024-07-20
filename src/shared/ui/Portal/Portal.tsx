import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode,
    targetParent?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        targetParent = document.body
    } = props

    return createPortal(children, targetParent);
};
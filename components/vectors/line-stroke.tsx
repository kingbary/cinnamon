import { SVGProps } from "react";

export function LineStroke(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L0.999999 17" stroke="#DADAE6" stroke-linecap="round" />
        </svg>
    );
}

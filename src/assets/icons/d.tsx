import { useState, useEffect } from "react";
import { SVGProps } from "src/types/ui";
export const D = ({
	fill,
	width,
	height,
	stroke,
	hoverStroke,
	hoverFill,
}: SVGProps) => {
	const [_fill, _setFill] = useState<string>(fill || "none");
	const [_stroke, _setStroke] = useState<string>(stroke || "none");
	const [_hover, _setHover] = useState<boolean>(false);
	useEffect(() => {
		if (_hover === true) {
			_setFill(hoverFill || "none");
			_setStroke(hoverStroke || "none");
		} else {
			_setFill(fill || "none");
			_setStroke(stroke || "none");
		}
	}, [_hover]);
	return (
		<svg
			width={width || 14}
			height={height || 12}
			onMouseEnter={(e: any) => {
				_setFill(hoverFill || "none");
				_setStroke(hoverStroke || "none");
			}}
			onMouseLeave={(e: any) => {
				_setFill(fill || "none");
				_setStroke(stroke || "none");
			}}
			// viewBox="0 0 14 12"
			viewBox={`0 0 ${width || 14} ${height || 12}`}
			fill={_fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.5288 0.666992H1.9309V4.34608H0.333008V5.66428H1.9309V7.04766H0.333008V8.36516H1.9309V12.0003H6.5288C9.29371 12.0003 11.3976 10.5164 12.2067 8.36587H13.6663V7.04837H12.5267C12.5548 6.81462 12.5688 6.5752 12.5688 6.33295V6.30037C12.5688 6.08503 12.5576 5.87253 12.5358 5.66428H13.6663V4.34678H12.2341C11.4453 2.16441 9.32529 0.666992 6.5288 0.666992ZM10.7983 8.36587C10.0916 9.83566 8.57301 10.8181 6.5288 10.8181H3.21652V8.36587H10.7983ZM11.1941 5.66428C11.2235 5.88174 11.239 6.10487 11.239 6.33295V6.36483C11.239 6.59787 11.2228 6.82524 11.192 7.04766H3.21581V5.66428H11.1941ZM6.5295 1.84708C8.58283 1.84708 10.1063 2.85574 10.8088 4.34608H3.21581V1.84708H6.5281H6.5295Z"
				fill={_fill}
			/>
		</svg>
	);
};
